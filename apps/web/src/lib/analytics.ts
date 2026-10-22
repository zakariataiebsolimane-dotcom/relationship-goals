/**
 * Google Analytics 4 for relationshipgoals.store (property "Relationship Goals", stream "Relationship Goals website").
 *
 * Consent mode v2:
 * - Visitors in the EEA, UK and Switzerland: analytics + ads storage denied until they accept
 *   "Analytics" in the cookie banner (GA then only sends cookieless pings).
 * - Everyone else (our main audience is the US): analytics allowed by default, ads storage denied.
 * - The banner's choice (cookie `cc_cookie`, events `cc:onConsent` / `cc:onChange`) updates consent live.
 *
 * Events:
 * - GA4 enhanced measurement already records page views and outbound clicks.
 * - `amazon_click` is our own event for every click on an Amazon link, with the product name and page,
 *   so we can see which guides and products send people to Amazon.
 */
export const GA_MEASUREMENT_ID = 'G-ZRFZXP6XKL';

const CONSENT_REGIONS = [
	'AT', 'BE', 'BG', 'HR', 'CY', 'CZ', 'DK', 'EE', 'FI', 'FR', 'DE', 'GR', 'HU', 'IS', 'IE', 'IT', 'LV', 'LI',
	'LT', 'LU', 'MT', 'NL', 'NO', 'PL', 'PT', 'RO', 'SK', 'SI', 'ES', 'SE', 'GB', 'CH',
];

export const gaInlineScript = `
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('consent', 'default', {ad_storage:'denied', ad_user_data:'denied', ad_personalization:'denied', analytics_storage:'denied', wait_for_update: 500, region: ${JSON.stringify(CONSENT_REGIONS)}});
gtag('consent', 'default', {ad_storage:'denied', ad_user_data:'denied', ad_personalization:'denied', analytics_storage:'granted'});
function rgApplyConsent(categories){
	if(!Array.isArray(categories)) return;
	var a = categories.indexOf('analytics') > -1, m = categories.indexOf('marketing') > -1;
	gtag('consent', 'update', {analytics_storage: a ? 'granted' : 'denied', ad_storage: m ? 'granted' : 'denied', ad_user_data: m ? 'granted' : 'denied', ad_personalization: m ? 'granted' : 'denied'});
}
try {
	var rgC = document.cookie.match(/(?:^|; )cc_cookie=([^;]*)/);
	if (rgC) rgApplyConsent(JSON.parse(decodeURIComponent(rgC[1])).categories);
} catch (e) {}
window.addEventListener('cc:onConsent', function(e){ rgApplyConsent(e.detail && e.detail.categories); });
window.addEventListener('cc:onChange', function(e){ rgApplyConsent(e.detail && e.detail.categories); });
gtag('js', new Date());
gtag('config', '${GA_MEASUREMENT_ID}');
document.addEventListener('click', function(e){
	var a = e.target && e.target.closest ? e.target.closest('a[href*="amazon."]') : null;
	if (!a) return;
	var card = a.closest('article');
	var h = card ? card.querySelector('h3') : null;
	gtag('event', 'amazon_click', {
		product: h ? h.textContent.replace(/^\\s*\\d+\\.\\s*/, '').trim().slice(0, 100) : '',
		link_place: a.classList.contains('product-photo') ? 'photo' : 'button',
		page_path: location.pathname,
		transport_type: 'beacon'
	});
}, true);
`;
