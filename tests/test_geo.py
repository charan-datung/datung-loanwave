"""Crawler access and entity consistency regression checks. Run: python3 -m unittest discover -s tests."""
import json
from pathlib import Path
import re
import unittest
from urllib.robotparser import RobotFileParser
import xml.etree.ElementTree as ET

ROOT = Path(__file__).resolve().parents[1]
ORG = "https://datung.io/#organization"


def schemas(file):
    text = (ROOT / file).read_text()
    return [json.loads(raw) for raw in re.findall(
        r'<script type="application/ld\+json">\s*(.*?)\s*</script>', text, re.S)]


class GeoTests(unittest.TestCase):
    def test_confirmed_no_collateral_eligibility(self):
        data = json.loads((ROOT / 'src/data/business-loan-discovery.json').read_text())
        self.assertFalse(data['collateralRequired'])
        self.assertTrue(data['creditApprovalRequired'])
        self.assertEqual(data['businessTypes'], 'any')
        self.assertEqual(data['bankStatementMonths'], 3)
        self.assertEqual(data['requiredDocuments'], ['ownerValidId', 'bankStatements', 'completedApplication'])

    def test_borrower_application_destination(self):
        data = json.loads((ROOT / 'src/data/business-loan-discovery.json').read_text())
        self.assertEqual(data['applicationUrl'], 'https://datungapply.com/apply')

    def test_requested_crawlers_can_read_public_pages_not_platform(self):
        text = (ROOT / 'public/robots.txt').read_text()
        names = re.findall(r'^User-agent: (.+)$', text, re.M)
        expected = {'Googlebot', 'Google-Extended', 'Bingbot', 'OAI-SearchBot',
                    'ChatGPT-User', 'GPTBot', 'PerplexityBot', 'Perplexity-User',
                    'Claude-SearchBot', 'Claude-User', 'ClaudeBot', 'Applebot', '*'}
        self.assertEqual(set(names), expected)
        parser = RobotFileParser()
        parser.parse(text.splitlines())
        for name in expected:
            with self.subTest(crawler=name):
                self.assertTrue(parser.can_fetch(name, 'https://datung.io/company-facts.html'))
                self.assertFalse(parser.can_fetch(name, 'https://datung.io/lovable/internal'))

    def test_requested_canonical_host_in_crawler_files(self):
        xml = ET.parse(ROOT / 'public/sitemap.xml')
        urls = [x.text for x in xml.findall('.//{http://www.sitemaps.org/schemas/sitemap/0.9}loc')]
        self.assertEqual(len(urls), 23)
        self.assertTrue(all(url and url.startswith('https://datung.io/') for url in urls))
        self.assertIn('Sitemap: https://datung.io/sitemap.xml', (ROOT / 'public/robots.txt').read_text())

    def test_company_identity_matches_approved_registration(self):
        home = schemas('index.html')[0]
        company = schemas('public/company-facts.html')[0]['@graph'][1]
        funder = schemas('public/funders.html')[0]['about']
        for entity in [home, company, funder]:
            with self.subTest(entity=entity['@type']):
                self.assertEqual(entity['@id'], ORG)
                self.assertEqual(entity['legalName'], 'Dark Knight Lending, Inc.')
                self.assertEqual([i['value'] for i in entity['identifier']], ['2024070157507-01', '3506'])

    def test_no_unsupported_loan_pricing_or_rating_schema(self):
        home = (ROOT / 'src/pages/Index.tsx').read_text()
        business = (ROOT / 'src/pages/BusinessLoans.tsx').read_text()
        self.assertNotIn('aggregateRating', home)
        self.assertNotIn('AggregateOffer', business)
        self.assertNotIn('lowPrice', business)
        self.assertNotIn('highPrice', business)


if __name__ == '__main__':
    unittest.main()