import { images } from './ideas';

export type GuideProduct = {
	name: string;
	image: string;
	alt: string;
	description: string;
	amazonUrl: string;
};

export type GuideSection = {
	heading: string;
	text: string;
	products: GuideProduct[];
};

export type ComparisonRow = { label: string; values: string[] };

export type GuideFaq = { question: string; answer: string };

export type Guide = {
	title: string;
	slug: string;
	category: string;
	seoTitle: string;
	metaDescription: string;
	intro: string;
	image: string;
	imageAlt: string;
	sections: GuideSection[];
	comparison?: { columns: string[]; rows: ComparisonRow[] };
	faq: GuideFaq[];
};

const A = '#'; // Replace with your Amazon affiliate URL

export const guides: Guide[] = [
	{
		"title": "Christmas Gifts for Boyfriend: 15 Ideas He Will Actually Use",
		"slug": "christmas-gifts-for-boyfriend",
		"category": "gifts-for-him",
		"seoTitle": "Christmas Gifts for Boyfriend: 15 Ideas He Will Actually Use (2026)",
		"metaDescription": "Stuck on what to get your boyfriend for Christmas? 15 gifts he will actually use, from sentimental keepsakes to cozy upgrades, each loved by thousands of buyers.",
		"image": images.giftsForHim,
		"imageAlt": "Flat lay of a leather wallet, wristwatch and folded shirt as gifts for him",
		"intro": "Let us guess: you asked him what he wants for Christmas and he said \"nothing, I'm good.\" Classic. Do not worry, we did the hard part. Every gift on this list has thousands of happy buyers, and every one is something he will use long after December 25. Short on time? Our top pick is the engraved wallet card: it costs little, he carries it every day, and it says exactly what you want it to say. Order by mid-December so it arrives in time.",
		"sections": [
			{
				"heading": "Sentimental gifts (the ones that make him quiet for a second)",
				"text": "Guys pretend they are not sentimental. Then they keep your note in their wallet for 6 years. These gifts carry your words or your moments, and that is what makes them hit.",
				"products": [
					{
						"name": "Top pick: engraved wallet love note card",
						"image": "https://images.pexels.com/photos/6519139/pexels-photo-6519139.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&fit=crop",
						"alt": "Engraved metal wallet card with a love message",
						"description": "A thin metal card with your message engraved on it, made to sit in his wallet forever. Every time he pays for coffee, he sees it. 4.8 stars from hundreds of girlfriends and wives who say he teared up.",
						"amazonUrl": "https://www.amazon.com/dp/B07YD2HWYK?tag=relations0237-20"
					},
					{
						"name": "Best for date nights: We're Not Really Strangers card game",
						"image": "https://images.pexels.com/photos/6803652/pexels-photo-6803652.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&fit=crop",
						"alt": "Card game for couples on a coffee table",
						"description": "The viral question game, with over 6,000 reviews. It turns a normal night in into the deepest conversation you have had in months. Fair warning: you will both learn something new.",
						"amazonUrl": "https://www.amazon.com/dp/B092GM9NWH?tag=relations0237-20"
					}
				]
			},
			{
				"heading": "Everyday upgrades (he will use these every single day)",
				"text": "The best gifts for guys are things they need but would never buy for themselves. These replace something old and worn out, and he will think of you every time he uses them.",
				"products": [
					{
						"name": "Best wallet: HIMI genuine leather bifold",
						"image": "https://images.pexels.com/photos/7952556/pexels-photo-7952556.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&fit=crop",
						"alt": "Brown leather bifold wallet for men",
						"description": "Is his current wallet falling apart? Thought so. Over 31,000 reviews for this soft leather wallet with RFID protection. Pair it with the engraved card above for the perfect combo.",
						"amazonUrl": "https://www.amazon.com/dp/B074W2VP89?tag=relations0237-20"
					},
					{
						"name": "Best for tech guys: 3-in-1 wireless charging stand",
						"image": "https://images.pexels.com/photos/17800265/pexels-photo-17800265.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&fit=crop",
						"alt": "Wireless charging stand for phone, watch and earbuds",
						"description": "Charges his phone, watch and earbuds at the same time, with no cable mess on the nightstand. Practical, clean and very easy to love.",
						"amazonUrl": "https://www.amazon.com/dp/B0CNTH3F7P?tag=relations0237-20"
					},
					{
						"name": "Best speaker: Anker Soundcore 2",
						"image": "https://images.pexels.com/photos/374110/pexels-photo-374110.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&fit=crop",
						"alt": "Small portable bluetooth speaker",
						"description": "Over 150,000 reviews. Waterproof, 24-hour battery, and big sound for its size. For the shower, the car, the gym and the beach.",
						"amazonUrl": "https://www.amazon.com/dp/B01MTB55WH?tag=relations0237-20"
					}
				]
			},
			{
				"heading": "Cozy gifts for winter",
				"text": "It is cold, he is tired, and his hoodie has holes in it. These gifts make his winter a lot more comfortable, and yes, you will probably steal the hoodie.",
				"products": [
					{
						"name": "Most loved: Carhartt loose-fit hoodie",
						"image": "https://images.pexels.com/photos/6667662/pexels-photo-6667662.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&fit=crop",
						"alt": "Man wearing a classic heavy hoodie in winter",
						"description": "The hoodie every guy wants, with over 50,000 reviews. Heavy, warm, and built to last for years. Pick a size up for that relaxed fit.",
						"amazonUrl": "https://www.amazon.com/dp/B002G9UD8W?tag=relations0237-20"
					},
					{
						"name": "Best slippers: VeraCosy memory foam slippers",
						"image": "https://images.pexels.com/photos/12969102/pexels-photo-12969102.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&fit=crop",
						"alt": "Men's memory foam house slippers",
						"description": "Over 40,000 reviews. Like walking on a pillow, with a sole thick enough to step outside to get the mail.",
						"amazonUrl": "https://www.amazon.com/dp/B07CLXD2V4?tag=relations0237-20"
					},
					{
						"name": "Best for stress: shiatsu neck and back massager",
						"image": "https://images.pexels.com/photos/7298867/pexels-photo-7298867.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&fit=crop",
						"alt": "Shiatsu neck massager with heat",
						"description": "Desk job? Gym sore? He will use this every evening. Deep-kneading nodes plus heat, with more than 50,000 reviews. Basically a massage that never gets tired.",
						"amazonUrl": "https://www.amazon.com/dp/B07DBY2X24?tag=relations0237-20"
					}
				]
			},
			{
				"heading": "Grooming gifts that upgrade his look",
				"text": "Smelling good and looking sharp is a gift for both of you. These are easy wins, especially if he still uses the same body spray from college.",
				"products": [
					{
						"name": "Best value cologne: Nautica Voyage",
						"image": "https://images.pexels.com/photos/34051691/pexels-photo-34051691.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&fit=crop",
						"alt": "Bottle of men's cologne",
						"description": "Fresh, clean and loved by over 150,000 buyers. The safe bet if you do not know his taste yet.",
						"amazonUrl": "https://www.amazon.com/dp/B000P22TIY?tag=relations0237-20"
					},
					{
						"name": "Best luxury cologne: Gucci Guilty pour Homme",
						"image": "https://images.pexels.com/photos/32645070/pexels-photo-32645070.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&fit=crop",
						"alt": "Luxury men's fragrance bottle",
						"description": "Warm, a little spicy and seriously attractive. The grown-up fragrance upgrade that makes you lean in for a hug.",
						"amazonUrl": "https://www.amazon.com/dp/B004O24Q8W?tag=relations0237-20"
					},
					{
						"name": "Best for beards: Viking Revolution beard kit",
						"image": "https://images.pexels.com/photos/3998402/pexels-photo-3998402.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&fit=crop",
						"alt": "Beard grooming kit with oil, balm and comb",
						"description": "Oil, balm, brush, comb and scissors in one box. Almost 20,000 reviews. His beard gets softer, and so do your kisses.",
						"amazonUrl": "https://www.amazon.com/dp/B07B53Q3BX?tag=relations0237-20"
					}
				]
			},
			{
				"heading": "Gifts for his hobbies",
				"text": "Show him you pay attention to what he loves. These are fun, a little playful, and perfect for the guy who has a hobby he will not stop talking about.",
				"products": [
					{
						"name": "For the grill master: TempPro wireless meat thermometer",
						"image": "https://images.pexels.com/photos/28292008/pexels-photo-28292008.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&fit=crop",
						"alt": "Wireless meat thermometer next to a grill",
						"description": "No more cutting the steak open to check. Two probes and a 500-foot range, so he can watch the game while the brisket cooks. Over 30,000 reviews.",
						"amazonUrl": "https://www.amazon.com/dp/B01GE77QT0?tag=relations0237-20"
					},
					{
						"name": "For the car guy: LEGO Technic Bugatti Bolide",
						"image": "https://images.pexels.com/photos/34200502/pexels-photo-34200502.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&fit=crop",
						"alt": "LEGO Technic race car model set",
						"description": "A detailed race car he builds himself. Hours of focus and fun, and it looks amazing on the shelf after. 4.8 stars.",
						"amazonUrl": "https://www.amazon.com/dp/B0BBWG5T23?tag=relations0237-20"
					},
					{
						"name": "For the whiskey lover: chilling stones gift set",
						"image": "https://images.pexels.com/photos/36322544/pexels-photo-36322544.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&fit=crop",
						"alt": "Whiskey stones in a gift box with glasses",
						"description": "Keeps his drink cold without watering it down. Comes ready to gift. Simple, classy, and over 13,000 reviews.",
						"amazonUrl": "https://www.amazon.com/dp/B014Q2R6GS?tag=relations0237-20"
					},
					{
						"name": "For the coffee addict: mug warmer",
						"image": "https://images.pexels.com/photos/13523793/pexels-photo-13523793.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&fit=crop",
						"alt": "Coffee mug on a heated mug warmer",
						"description": "For the guy who always forgets his coffee on the desk. Keeps it hot for hours, so every sip tastes like the first.",
						"amazonUrl": "https://www.amazon.com/dp/B0CC8DS2S5?tag=relations0237-20"
					}
				]
			}
		],
		"comparison": {
			"columns": [
				"Gift",
				"Best for",
				"He will use it"
			],
			"rows": [
				{
					"label": "Engraved wallet card",
					"values": [
						"Sentimental guys",
						"Every day, forever"
					]
				},
				{
					"label": "Leather wallet",
					"values": [
						"Practical guys",
						"Every day"
					]
				},
				{
					"label": "Carhartt hoodie",
					"values": [
						"Cozy winter",
						"Every week"
					]
				},
				{
					"label": "Neck massager",
					"values": [
						"Stressed or sore",
						"Every evening"
					]
				},
				{
					"label": "Cologne",
					"values": [
						"Style upgrade",
						"Every morning"
					]
				},
				{
					"label": "Meat thermometer",
					"values": [
						"Grill lovers",
						"Every cookout"
					]
				}
			]
		},
		"faq": [
			{
				"question": "What should I get my boyfriend for Christmas if he says he wants nothing?",
				"answer": "Get something he uses every day but would never buy himself: a new wallet, a good hoodie or a better cologne. Add a personal touch like an engraved wallet card and it becomes unforgettable."
			},
			{
				"question": "What is a good sentimental Christmas gift for a boyfriend?",
				"answer": "An engraved wallet card with your own message. It is small, he carries it every day, and it says exactly what you want it to say."
			},
			{
				"question": "What is a good Christmas gift for a new boyfriend?",
				"answer": "Keep it thoughtful but not too intense: a cozy hoodie, a card game you can play together, or a fun gift for his hobby."
			},
			{
				"question": "When should I order Christmas gifts on Amazon?",
				"answer": "By mid-December for most items. Engraved and personalized gifts take longer, so order those first."
			}
		]
	},
	{
		"title": "Matching Couple Outfits: 25 Ideas That Look Coordinated, Not Cheesy",
		"slug": "matching-couple-outfits-ideas",
		"category": "couple-style",
		"seoTitle": "Matching Couple Outfits: 25 Ideas That Look Coordinated, Not Cheesy",
		"metaDescription": "25 matching couple outfit ideas for every season and date, from cozy hoodies to 2026 trends. Look like a pair without dressing like twins.",
		"image": images.coupleStyle,
		"imageAlt": "A couple walking together in coordinated neutral-toned autumn outfits",
		"intro": "Let us be honest: identical \"His\" and \"Hers\" T-shirts are a little cringe. But the couples who look amazing together on Instagram? They do not match. They coordinate. They share a color, a fabric or a vibe, and each still looks like themselves. Here is how to steal that look, with real pieces for every season and every date. The 3 golden rules: share one thing, not everything. Keep the same level of dressy. Let one person lead, the other echo.",
		"sections": [
			{
				"heading": "Everyday: same color, different pieces",
				"text": "The easiest trick in the book. Pick one color, cream, olive or camel, and both wear it in different pieces. Instantly put-together, zero effort, great in photos.",
				"products": [
					{
						"name": "For him: neutral button-up overshirt",
						"image": "https://images.pexels.com/photos/31696312/pexels-photo-31696312.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&fit=crop",
						"alt": "Folded knit sweaters in complementary ivory and navy tones",
						"description": "The easiest base for a coordinated look. Throw it open over a tee or button it with chinos. Pick cream, olive or camel to match her sweater.",
						"amazonUrl": "https://www.amazon.com/dp/B0FFBJ3H88?tag=relations0237-20"
					},
					{
						"name": "For her: Amazon Essentials cable-knit sweater",
						"image": "https://images.pexels.com/photos/5618175/pexels-photo-5618175.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&fit=crop",
						"alt": "Soft knit sweater folded with a gift card",
						"description": "Over 13,000 reviews love how soft it is. Choose a shade close to his overshirt, not identical: cream next to oatmeal looks richer than two exact matches.",
						"amazonUrl": "https://www.amazon.com/dp/B07QC4GD5Q?tag=relations0237-20"
					},
					{
						"name": "The shared detail: Keds white leather sneakers",
						"image": "https://images.pexels.com/photos/9891483/pexels-photo-9891483.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&fit=crop",
						"alt": "A couple walking together in coordinated neutral outfits",
						"description": "Clean white sneakers tie two casual outfits together in every photo. Get a white pair for him too and you are instantly coordinated.",
						"amazonUrl": "https://www.amazon.com/dp/B000ER1RCO?tag=relations0237-20"
					}
				]
			},
			{
				"heading": "Cozy: hoodies, sweatsuits and flannels",
				"text": "Fall and winter were made for this. Matching hoodies and sweatsuits are the most comfortable way to look like a pair, and flannels are a must for cabin trips and pumpkin patches.",
				"products": [
					{
						"name": "Couple favorite: Gildan heavy fleece hoodie",
						"image": "https://images.pexels.com/photos/12163465/pexels-photo-12163465.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&fit=crop",
						"alt": "A couple in coordinated cozy outfits",
						"description": "More than 100,000 reviews and dozens of colors. Same hoodie, two sizes, and you are officially that cozy couple. Bonus: she will steal his anyway.",
						"amazonUrl": "https://www.amazon.com/dp/B01B9K2JB2?tag=relations0237-20"
					},
					{
						"name": "Lazy Sunday goals: unisex hoodie and jogger set",
						"image": "https://images.pexels.com/photos/8835949/pexels-photo-8835949.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&fit=crop",
						"alt": "Folded knit sweaters in complementary tones",
						"description": "A matching set for movie nights, airports and slow weekends. Earthy colors like sage and oatmeal look the most expensive.",
						"amazonUrl": "https://www.amazon.com/dp/B0CNRV62F9?tag=relations0237-20"
					},
					{
						"name": "Cabin-trip classic: Legendary Whitetails flannel",
						"image": "https://images.pexels.com/photos/14773602/pexels-photo-14773602.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&fit=crop",
						"alt": "Flat lay of men's accessories and a folded shirt",
						"description": "Almost 100,000 reviews and the softest flannel around. Same plaid, different fit: fitted for him, oversized for her.",
						"amazonUrl": "https://www.amazon.com/dp/B01KTUMBOI?tag=relations0237-20"
					}
				]
			},
			{
				"heading": "Date night: all black, satin and blazers",
				"text": "All black is the cheat code for date night: impossible to get wrong. Add one shared metal, gold or silver, and you look like you planned it for hours.",
				"products": [
					{
						"name": "Date night for him: textured knit polo",
						"image": "https://images.pexels.com/photos/26063373/pexels-photo-26063373.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&fit=crop",
						"alt": "Flat lay of a wallet, watch and folded shirt",
						"description": "Dressier than a tee, more relaxed than a shirt. In black, it pairs perfectly with her black dress.",
						"amazonUrl": "https://www.amazon.com/dp/B0FY2PJFPF?tag=relations0237-20"
					},
					{
						"name": "Date night for her: long-sleeve black midi dress",
						"image": "https://images.pexels.com/photos/13569179/pexels-photo-13569179.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&fit=crop",
						"alt": "Elegant women's gift items on a table",
						"description": "Simple, elegant and impossible to get wrong. Wear it next to anything black he owns and you look like you planned it.",
						"amazonUrl": "https://www.amazon.com/dp/B0821K76PY?tag=relations0237-20"
					},
					{
						"name": "Romantic pick: satin midi slip dress",
						"image": "https://images.pexels.com/photos/5822660/pexels-photo-5822660.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&fit=crop",
						"alt": "Soft women's clothing styled for a date",
						"description": "Satin catches candlelight beautifully. Pair it with his warm-toned shirt for a soft, romantic coordinated look.",
						"amazonUrl": "https://www.amazon.com/dp/B0C278QD86?tag=relations0237-20"
					}
				]
			},
			{
				"heading": "Seasonal looks",
				"text": "Camel coats in fall, puffers in winter, linen in spring, and matching Christmas sweaters for the holiday party. Pick your season, pick your look.",
				"products": [
					{
						"name": "Fall power move: men's camel overcoat",
						"image": "https://images.pexels.com/photos/7971603/pexels-photo-7971603.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&fit=crop",
						"alt": "A couple in coordinated autumn coats",
						"description": "Two camel coats over dark knits look expensive even on a small budget. The classic couple look for city walks.",
						"amazonUrl": "https://www.amazon.com/dp/B07LDC982H?tag=relations0237-20"
					},
					{
						"name": "Winter essential: waterproof puffer jacket",
						"image": "https://images.pexels.com/photos/10757627/pexels-photo-10757627.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&fit=crop",
						"alt": "A couple bundled up in winter jackets",
						"description": "Warm, light and easy to coordinate. Pick one color for both of you, or two shades that sit well together.",
						"amazonUrl": "https://www.amazon.com/dp/B08JH6WZ66?tag=relations0237-20"
					},
					{
						"name": "Holiday party hit: matching ugly Christmas sweaters",
						"image": "https://images.pexels.com/photos/6517825/pexels-photo-6517825.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&fit=crop",
						"alt": "A couple in matching red plaid holiday outfits",
						"description": "Sold as a his-and-hers pair. Wear them to the office party and win the photo contest. Order early, they sell out in December.",
						"amazonUrl": "https://www.amazon.com/dp/B0D73L3584?tag=relations0237-20"
					}
				]
			},
			{
				"heading": "2026 trend looks",
				"text": "Want to be ahead of everyone? Pinterest's 2026 trends are icy blue, khaki utility and cozy oversized knits. Wear them as a couple and you will be the first ones doing it.",
				"products": [
					{
						"name": "2026 trend for her: light blue knit sweater",
						"image": "https://images.pexels.com/photos/9939812/pexels-photo-9939812.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&fit=crop",
						"alt": "Soft light blue knit sweater",
						"description": "Icy blue is Pinterest's color of 2026. Fresh, soft and gorgeous next to his navy coat.",
						"amazonUrl": "https://www.amazon.com/dp/B07QD3174G?tag=relations0237-20"
					},
					{
						"name": "2026 trend for him: flannel-lined shirt jacket",
						"image": "https://images.pexels.com/photos/6140370/pexels-photo-6140370.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&fit=crop",
						"alt": "Men's utility jacket flat lay",
						"description": "The adventure look everyone will wear next year. Rugged, warm and perfect next to her olive or khaki layer.",
						"amazonUrl": "https://www.amazon.com/dp/B00EUHCUIO?tag=relations0237-20"
					}
				]
			},
			{
				"heading": "Not ready to match clothes? Match accessories",
				"text": "Not ready for matching clothes? Start small. A beanie or a bracelet each is the subtle way to say \"we are together\" without saying anything.",
				"products": [
					{
						"name": "The easy match: Carhartt cuffed beanie",
						"image": "https://images.pexels.com/photos/6720785/pexels-photo-6720785.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&fit=crop",
						"alt": "A couple in coordinated winter outfits",
						"description": "Over 150,000 reviews. Pick two colors that go together, or the same one, and you are matching without trying.",
						"amazonUrl": "https://www.amazon.com/dp/B0C4V5PK37?tag=relations0237-20"
					},
					{
						"name": "Subtle match: matching couple bracelets",
						"image": "https://images.pexels.com/photos/7872455/pexels-photo-7872455.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&fit=crop",
						"alt": "Matching bracelets for couples",
						"description": "Two bracelets, one for each of you. Small, daily and a quiet way to say \"we are together\".",
						"amazonUrl": "https://www.amazon.com/dp/B0CZDZMG2F?tag=relations0237-20"
					}
				]
			}
		],
		"comparison": {
			"columns": [
				"Look",
				"Best for",
				"Effort"
			],
			"rows": [
				{
					"label": "Same color, different pieces",
					"values": [
						"Everyday, photos",
						"Low"
					]
				},
				{
					"label": "Matching hoodies",
					"values": [
						"Fall, travel",
						"Low"
					]
				},
				{
					"label": "All black",
					"values": [
						"Date night",
						"Low"
					]
				},
				{
					"label": "Camel coats",
					"values": [
						"Fall, city",
						"Medium"
					]
				},
				{
					"label": "Icy blue",
					"values": [
						"Winter 2026",
						"Medium"
					]
				},
				{
					"label": "Matching accessories",
					"values": [
						"Any time",
						"Lowest"
					]
				}
			]
		},
		"faq": [
			{
				"question": "Are matching couple outfits cringe?",
				"answer": "Only when they are identical and loud. Sharing one color or one piece looks stylish, not forced."
			},
			{
				"question": "How do you match without looking like twins?",
				"answer": "Pick one shared element, like a color or a pattern, and keep everything else different."
			},
			{
				"question": "What colors work best for couple outfits?",
				"answer": "Neutrals like cream, camel, black and olive are the easiest. For photos, pick one neutral plus one accent color."
			},
			{
				"question": "Where can I buy affordable matching outfits?",
				"answer": "Amazon has many his-and-hers sets and unisex pieces sold in men's and women's sizes. Check the size chart for each listing, because sizes often differ."
			}
		]
	},
	{
		"title": "Matching Christmas Pajamas for Couples: 11 Cozy Sets for 2026",
		"slug": "matching-christmas-pajamas-couples-2026",
		"category": "couple-style",
		"seoTitle": "Matching Christmas Pajamas for Couples: 11 Cozy Sets for 2026",
		"metaDescription": "The cutest matching Christmas pajamas for couples: plaid flannel, Fair Isle, fleece onesies and more, plus sizing tips so both sets fit.",
		"image": images.christmasPajamas,
		"imageAlt": "A couple wearing matching red plaid flannel pajamas by a Christmas tree",
		"intro": "Nothing says \"we are THAT couple\" like matching Christmas pajamas, and honestly, you should be. They make Christmas morning feel like a movie, your photos look 10 times better, and you will wear them all winter long. We picked sets with thousands of happy buyers, sizes for both of you, and fabrics that are actually comfy. Our top pick: the classic red buffalo plaid. Order by early December so you have time to swap sizes.",
		"sections": [
			{
				"heading": "The classics (you cannot go wrong)",
				"text": "Red plaid, snowflakes and Christmas prints are classics for a reason: they look amazing next to the tree and in every photo. Flannel can shrink a little in the wash, so most buyers size up.",
				"products": [
					{
						"name": "Best overall: red buffalo plaid flannel pants",
						"image": "https://images.pexels.com/photos/5522909/pexels-photo-5522909.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&fit=crop",
						"alt": "A couple in matching red plaid flannel pajamas",
						"description": "Over 40,000 reviews and the most classic Christmas look there is. Soft, warm and made for coffee by the tree. Get a pair for each of you, or pair his with a red top for her.",
						"amazonUrl": "https://www.amazon.com/dp/B06Y1QQP15?tag=relations0237-20"
					},
					{
						"name": "Best for photos: Fair Isle family pajamas",
						"image": "https://images.pexels.com/photos/15293999/pexels-photo-15293999.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&fit=crop",
						"alt": "Couple pajamas with Nordic snowflake print",
						"description": "Nordic snowflake prints that look cozy and grown-up, not cartoonish. They come in sizes for the whole family if you want everyone in the picture.",
						"amazonUrl": "https://www.amazon.com/dp/B0FG2WNQF9?tag=relations0237-20"
					},
					{
						"name": "Best lightweight: striped Christmas matching set",
						"image": "https://images.pexels.com/photos/1028741/pexels-photo-1028741.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&fit=crop",
						"alt": "Light cotton holiday pajamas",
						"description": "Light, festive and breathable. Perfect if your home is warm or one of you always kicks the blanket off.",
						"amazonUrl": "https://www.amazon.com/dp/B0FN4G6CBG?tag=relations0237-20"
					}
				]
			},
			{
				"heading": "Cozy, cute and a little bit silly",
				"text": "For couples who take comfort seriously and themselves not too seriously. Onesies for movie nights, satin for a little glam, and family sets when the whole crew wants in.",
				"products": [
					{
						"name": "Most fun: Tipsy Elves Christmas onesies",
						"image": "https://images.pexels.com/photos/6405805/pexels-photo-6405805.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&fit=crop",
						"alt": "Couple in cozy holiday onesies",
						"description": "The warmest, silliest option on the list. Zip in, grab the hot chocolate, and start the Christmas movie marathon. Your photos will be legendary.",
						"amazonUrl": "https://www.amazon.com/dp/B076849F21?tag=relations0237-20"
					},
					{
						"name": "Best for her: red satin pajama set",
						"image": "https://images.pexels.com/photos/6487380/pexels-photo-6487380.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&fit=crop",
						"alt": "Red satin pajamas folded with a gift tag",
						"description": "Almost 20,000 reviews. Smooth, elegant and seriously flattering. Pair it with his red plaid flannel: same color, two textures, and the cutest coordinated look of the season.",
						"amazonUrl": "https://www.amazon.com/dp/B089F1LJZ4?tag=relations0237-20"
					},
					{
						"name": "Best for the whole family: matching holiday set",
						"image": "https://images.pexels.com/photos/5522896/pexels-photo-5522896.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&fit=crop",
						"alt": "Folded cozy loungewear in festive colors",
						"description": "When the kids, the parents and the in-laws all want to match. Big group, one print, one unforgettable photo.",
						"amazonUrl": "https://www.amazon.com/dp/B09XFF17H9?tag=relations0237-20"
					}
				]
			},
			{
				"heading": "The extra-special touches",
				"text": "Want to make it a real gift? Go for a coordinated couples set, add your dog to the photo, or pick a set that is ready to wrap.",
				"products": [
					{
						"name": "Best his-and-hers set: couples Christmas pajamas",
						"image": "https://images.pexels.com/photos/9451223/pexels-photo-9451223.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&fit=crop",
						"alt": "Personalized holiday gift with names",
						"description": "Made as a pair, so you do not have to hunt for two matching listings. Easy, coordinated and ready for Christmas morning.",
						"amazonUrl": "https://www.amazon.com/dp/B0DGGHSYGL?tag=relations0237-20"
					},
					{
						"name": "Cutest photo: matching set with a pet size",
						"image": "https://images.pexels.com/photos/32949053/pexels-photo-32949053.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&fit=crop",
						"alt": "Holiday gift box with matching pet outfit",
						"description": "Yes, the dog gets pajamas too. The same print for you, your partner and your pup, and the photo everyone will save.",
						"amazonUrl": "https://www.amazon.com/dp/B0CKHV1821?tag=relations0237-20"
					},
					{
						"name": "Easiest gift for her: soft long-sleeve pajama set",
						"image": "https://images.pexels.com/photos/6976782/pexels-photo-6976782.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&fit=crop",
						"alt": "Wrapped pajama gift box with ribbon",
						"description": "More than 10,000 reviews mention one thing: it is incredibly soft. A no-fail Christmas gift that she will wear way past January.",
						"amazonUrl": "https://www.amazon.com/dp/B0CGRHDVPR?tag=relations0237-20"
					}
				]
			},
			{
				"heading": "For every climate",
				"text": "Freezing winter or Christmas at the beach, there is a set for you. Couple sets are often sold as separate men's and women's listings, so check each size chart.",
				"products": [
					{
						"name": "Best for cold winters: waffle-knit set",
						"image": "https://images.pexels.com/photos/5426052/pexels-photo-5426052.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&fit=crop",
						"alt": "Waffle-knit sleepwear folded on a bed",
						"description": "Thick, cozy waffle cotton that keeps you warm without feeling sweaty. A grown-up alternative to fleece.",
						"amazonUrl": "https://www.amazon.com/dp/B0B8SLM739?tag=relations0237-20"
					},
					{
						"name": "Best for warm places: short-sleeve Christmas set",
						"image": "https://images.pexels.com/photos/10604223/pexels-photo-10604223.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&fit=crop",
						"alt": "Short-sleeve holiday pajamas",
						"description": "Spending Christmas somewhere sunny? Keep the tradition without melting. Short sleeves, same festive vibe.",
						"amazonUrl": "https://www.amazon.com/dp/B0CK1FMTRB?tag=relations0237-20"
					}
				]
			}
		],
		"comparison": {
			"columns": [
				"Fabric",
				"Best for",
				"Watch out for"
			],
			"rows": [
				{
					"label": "Flannel",
					"values": [
						"Cold homes, classic look",
						"Can shrink; size up"
					]
				},
				{
					"label": "Cotton jersey",
					"values": [
						"Warm sleepers",
						"Less cozy in winter"
					]
				},
				{
					"label": "Fleece",
					"values": [
						"The warmest option",
						"Can feel hot indoors"
					]
				},
				{
					"label": "Satin",
					"values": [
						"A dressier look for her",
						"Not warm on its own"
					]
				},
				{
					"label": "Waffle knit",
					"values": [
						"Cold climates, matte look",
						"Thicker, heavier"
					]
				}
			]
		},
		"faq": [
			{
				"question": "When should I order matching Christmas pajamas?",
				"answer": "In November or the first week of December, so you have time to exchange sizes."
			},
			{
				"question": "Are matching pajamas a good Christmas gift for a partner?",
				"answer": "Yes. They are personal, useful all winter, and start a yearly tradition."
			},
			{
				"question": "Can we match without the exact same set?",
				"answer": "Yes: pick the same color in two fabrics, like red satin for her and red plaid flannel for him."
			}
		]
	},
	{
		"title": "How to Coordinate Outfits With Your Partner (Without Matching)",
		"slug": "coordinate-outfits-without-matching",
		"category": "couple-style",
		"seoTitle": "How to Coordinate Outfits With Your Partner (Without Matching): 2026 Guide",
		"metaDescription": "Learn how to coordinate outfits with your partner in 5 simple rules, with color pairs and 3 ready-made looks. Look like a pair, not twins.",
		"image": images.coordinatedSweaters,
		"imageAlt": "Folded knit sweaters in complementary ivory and navy tones",
		"intro": "Ever seen a couple who just look like they belong together, even though they are not wearing the same thing? That is coordination, and it is a skill you can learn in 5 minutes. Here are the 5 rules stylists use, the color pairs that always work, and 3 ready-to-shop outfits you can copy this weekend.",
		"sections": [
			{
				"heading": "Rule 1: Choose a shared palette of 2 to 3 colors",
				"text": "Pick two or three colors you both wear, for example cream, camel and brown. Every piece either of you wears comes from that palette, so you can wear completely different clothes and still look like a pair.",
				"products": []
			},
			{
				"heading": "Rule 2: Share one element on purpose",
				"text": "One shared thing is enough: the same color jacket, the same pattern, or the same accessory. More than one shared element starts to look like a costume.",
				"products": []
			},
			{
				"heading": "Rule 3: Match the dress level",
				"text": "If she wears a dress, he wears a shirt and trousers, not a hoodie. The same color does not save outfits with different dress levels.",
				"products": []
			},
			{
				"heading": "Rule 4: Mix textures",
				"text": "Knit with denim, satin with wool, leather with cotton. Different textures in one color look rich and intentional.",
				"products": []
			},
			{
				"heading": "Rule 5: Let one person lead, the other echo",
				"text": "If one partner wears a statement piece, like a red coat, the other echoes it in something small: a red scarf, red socks or a red watch strap.",
				"products": []
			},
			{
				"heading": "Look 1: The weekend coffee date",
				"text": "Her: cream cable knit and light jeans. Him: camel overshirt and dark jeans. Shared element: white sneakers.",
				"products": [
					{
						"name": "Her base: cream cable-knit sweater",
						"image": "https://images.pexels.com/photos/14642651/pexels-photo-14642651.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&fit=crop",
						"alt": "Cream cable-knit sweater folded",
						"description": "The soft base of the look. A slightly oversized fit pairs well with light jeans.",
						"amazonUrl": "https://www.amazon.com/dp/B07QC4GD5Q?tag=relations0237-20"
					},
					{
						"name": "His layer: flannel-lined overshirt",
						"image": "https://images.pexels.com/photos/17894643/pexels-photo-17894643.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&fit=crop",
						"alt": "Camel overshirt flat lay",
						"description": "A warm overshirt in earthy tones that echoes her cream knit without matching it.",
						"amazonUrl": "https://www.amazon.com/dp/B09GZD3Y7Y?tag=relations0237-20"
					},
					{
						"name": "The shared element: white leather sneakers",
						"image": "https://images.pexels.com/photos/5560288/pexels-photo-5560288.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&fit=crop",
						"alt": "White sneakers on a couple walking",
						"description": "A classic white sneaker for him. Match it with her white pair for the shared element.",
						"amazonUrl": "https://www.amazon.com/dp/B08QBJTHM6?tag=relations0237-20"
					}
				]
			},
			{
				"heading": "Look 2: The dinner date",
				"text": "Her: black satin midi skirt and black top. Him: charcoal knit polo and black trousers. Shared element: gold jewelry or a gold watch.",
				"products": [
					{
						"name": "Her statement: black satin midi skirt",
						"image": "https://images.pexels.com/photos/20891186/pexels-photo-20891186.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&fit=crop",
						"alt": "Black satin skirt styled for evening",
						"description": "Satin catches the light and keeps an all-black look from feeling flat.",
						"amazonUrl": "https://www.amazon.com/dp/B08TM6WFB6?tag=relations0237-20"
					},
					{
						"name": "His match: charcoal long-sleeve polo",
						"image": "https://images.pexels.com/photos/29204802/pexels-photo-29204802.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&fit=crop",
						"alt": "Charcoal knit polo folded",
						"description": "Charcoal next to black reads elegant and intentional.",
						"amazonUrl": "https://www.amazon.com/dp/B08FH4QTWT?tag=relations0237-20"
					}
				]
			},
			{
				"heading": "Look 3: The winter walk",
				"text": "Her: icy blue sweater and white puffer. Him: navy wool coat and gray knit. Shared element: matching beanies.",
				"products": [
					{
						"name": "Her color: light blue knit sweater",
						"image": "https://images.pexels.com/photos/9939812/pexels-photo-9939812.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&fit=crop",
						"alt": "Light blue knit sweater",
						"description": "Icy blue is a 2026 favorite and pairs naturally with navy.",
						"amazonUrl": "https://www.amazon.com/dp/B07QD3174G?tag=relations0237-20"
					},
					{
						"name": "His coat: navy wool-blend overcoat",
						"image": "https://images.pexels.com/photos/7653719/pexels-photo-7653719.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&fit=crop",
						"alt": "Navy wool coat for winter",
						"description": "A classic coat that works with every palette.",
						"amazonUrl": "https://www.amazon.com/dp/B07MD1355Y?tag=relations0237-20"
					},
					{
						"name": "The finishing touch: Carhartt cuffed beanies",
						"image": "https://images.pexels.com/photos/6720785/pexels-photo-6720785.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&fit=crop",
						"alt": "Couple in matching winter beanies",
						"description": "Over 150,000 reviews. Pick two colors that go together, or the same one, and you are matching without trying.",
						"amazonUrl": "https://www.amazon.com/dp/B0C4V5PK37?tag=relations0237-20"
					}
				]
			},
			{
				"heading": "4 mistakes to avoid",
				"text": "Head-to-toe identical outfits: fun for one photo, weird for a whole day. Too many colors: stick to your palette of two or three. Unbalanced fits: one oversized, one skin-tight breaks the look. Loud slogans: a shared color looks way more modern than \"His\" and \"Hers\" text. Avoid these 4 and you are already ahead of most couples.",
				"products": []
			}
		],
		"comparison": {
			"columns": [
				"Her",
				"Him",
				"Mood"
			],
			"rows": [
				{
					"label": "Cream knit",
					"values": [
						"Camel coat",
						"Warm, soft, old money"
					]
				},
				{
					"label": "Black dress",
					"values": [
						"Charcoal shirt",
						"Elegant date night"
					]
				},
				{
					"label": "Icy blue sweater",
					"values": [
						"Navy coat",
						"Fresh 2026 winter"
					]
				},
				{
					"label": "Olive jacket",
					"values": [
						"Khaki chinos",
						"Outdoor, adventure"
					]
				},
				{
					"label": "Burgundy top",
					"values": [
						"Gray suit, burgundy tie",
						"Holiday party"
					]
				},
				{
					"label": "White linen",
					"values": [
						"Sand linen",
						"Summer, beach, brunch"
					]
				},
				{
					"label": "Blush pink",
					"values": [
						"Light gray",
						"Romantic, Valentine's"
					]
				}
			]
		},
		"faq": [
			{
				"question": "How do couples coordinate outfits for photos?",
				"answer": "Pick a palette of two or three colors that suit the location, then let each person choose pieces inside it."
			},
			{
				"question": "Should couples wear the same color?",
				"answer": "The same color family works better than the exact same shade. Cream and oatmeal look richer than two identical creams."
			},
			{
				"question": "What if our styles are very different?",
				"answer": "Match one small thing, like shoes or an accessory, and keep your own styles for everything else."
			}
		]
	},
	{
		"title": "Best Long Distance Relationship Gifts",
		"slug": "best-long-distance-relationship-gifts",
		"category": "long-distance",
		"seoTitle": "Best Long Distance Relationship Gifts: Thoughtful Ideas That Close the Gap",
		"metaDescription": "The best long distance relationship gifts: touch bracelets, touch lamps, open-when letters and keepsakes that help you feel close across the miles.",
		"image": images.longDistance,
		"imageAlt": "A couple connected across the distance with matching gifts",
		"intro": "Missing someone 5,000 km away hits different at 2am. The good news: the right gift can make the distance feel a lot smaller. We picked gifts that do one of three things: let you feel each other every day, give you moments together, or turn your love story into something you can hold. Short on time? Our top pick is the TOTWOO touch bracelets: tap yours, and theirs lights up on the other side of the world. Christmas tip: international shipping is slow in December, so order early.",
		"sections": [
			{
				"heading": "Feel close every single day",
				"text": "These are the gifts long-distance couples rave about, because you use them every day. One tap or one touch, and your partner knows you are thinking of them right now. No texting, no time zones, just a little \"I'm here\" you can feel.",
				"products": [
					{
						"name": "Best overall: TOTWOO Sun and Moon touch bracelets",
						"image": "https://images.pexels.com/photos/34549909/pexels-photo-34549909.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&fit=crop",
						"alt": "Matching smart bracelets for long distance couples",
						"description": "Tap your bracelet and theirs lights up and vibrates, anywhere in the world. It is the closest thing to holding hands across an ocean. Why couples love it: you wear it all day, so the connection never switches off. Good to know: it pairs through an app, so check that both phones are supported.",
						"amazonUrl": "https://www.amazon.com/dp/B0DR2HXMFQ?tag=relations0237-20"
					},
					{
						"name": "Most romantic: LuvLink friendship lamp",
						"image": "https://images.pexels.com/photos/35392792/pexels-photo-35392792.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&fit=crop",
						"alt": "Two glowing lamps connected across the distance",
						"description": "Touch your lamp and theirs glows in their room, in your color. Leave it on the nightstand and you will get a soft \"goodnight\" from the other side of the world every evening. Perfect for: couples in very different time zones.",
						"amazonUrl": "https://www.amazon.com/dp/B0C5WVGVF4?tag=relations0237-20"
					}
				]
			},
			{
				"heading": "Gifts made of words (the ones that make them cry)",
				"text": "Texts disappear in the scroll. Handwritten notes stay. These gifts give your partner your words to hold on the hard days, the lonely nights and the \"I just miss you\" moments.",
				"products": [
					{
						"name": "Best for words: love notes postbox with 50 mini notes",
						"image": "https://images.pexels.com/photos/7333509/pexels-photo-7333509.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&fit=crop",
						"alt": "Stack of open when envelopes tied with ribbon",
						"description": "A tiny wooden postbox filled with 50 little notes you write yourself. They open one when they miss you, one when they cannot sleep, one when they need a laugh. Costs little, means everything.",
						"amazonUrl": "https://www.amazon.com/dp/B0DQVG86TF?tag=relations0237-20"
					},
					{
						"name": "Best keepsake to build together: Our Adventure Book",
						"image": "https://images.pexels.com/photos/16605273/pexels-photo-16605273.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&fit=crop",
						"alt": "A journal and question cards on a table",
						"description": "Every visit, every ticket stub, every photo booth strip goes in here. Bring it each time you meet and add a page. In a few years it becomes the most precious thing you own.",
						"amazonUrl": "https://www.amazon.com/dp/B091YKMS28?tag=relations0237-20"
					}
				]
			},
			{
				"heading": "Turn a video call into a real date",
				"text": "Another \"so... what did you do today?\" call? Not tonight. These gifts give you something to do together, even through a screen, and something fun to open when the box arrives.",
				"products": [
					{
						"name": "Best for video dates: Let's Get Deep question cards",
						"image": "https://images.pexels.com/photos/8512178/pexels-photo-8512178.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&fit=crop",
						"alt": "Card games and snacks set up for a video date",
						"description": "Thousands of reviews for a reason. Pull a card on your next call and get answers you never heard before. Warning: you might stay up until 3am talking.",
						"amazonUrl": "https://www.amazon.com/dp/B08PQ14F57?tag=relations0237-20"
					},
					{
						"name": "Best surprise: ready-made care package",
						"image": "https://images.pexels.com/photos/6868621/pexels-photo-6868621.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&fit=crop",
						"alt": "Open gift box filled with wrapped presents and a letter",
						"description": "A box of cozy treats that arrives like a hug in the mail. Add a handwritten note and a hoodie that smells like you, and it becomes unforgettable.",
						"amazonUrl": "https://www.amazon.com/dp/B0FVSCH5TB?tag=relations0237-20"
					}
				]
			},
			{
				"heading": "Keepsakes for your love story",
				"text": "Some gifts are not about the distance. They are about the two of you. These end up on the wall, around the neck, or on the desk, counting down the days until you are finally in the same city.",
				"products": [
					{
						"name": "Best for anniversaries: custom city map print",
						"image": "https://images.pexels.com/photos/6960385/pexels-photo-6960385.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&fit=crop",
						"alt": "Framed map print showing two cities",
						"description": "Your two cities, the miles between them, and a date that matters to you. It ends up on the wall, and every time they walk past it, they think of you.",
						"amazonUrl": "https://www.amazon.com/dp/B0GZLN3D1D?tag=relations0237-20"
					},
					{
						"name": "Best everyday piece: puzzle heart matching necklaces",
						"image": "https://images.pexels.com/photos/12427695/pexels-photo-12427695.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&fit=crop",
						"alt": "Two matching necklaces in a gift box",
						"description": "Two halves of one heart, one for each of you. Thousands of buyers love it, and it is a sweet daily reminder that someone out there completes the picture.",
						"amazonUrl": "https://www.amazon.com/dp/B01BWJ89T6?tag=relations0237-20"
					},
					{
						"name": "Best for \"see you soon\": DIY countdown calendar",
						"image": "https://images.pexels.com/photos/14643691/pexels-photo-14643691.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&fit=crop",
						"alt": "A desk countdown calendar next to coffee mugs",
						"description": "Fill each little box with a note, a photo or a candy. They open one every day until you land. The countdown becomes part of the gift.",
						"amazonUrl": "https://www.amazon.com/dp/B0H8NXZPWM?tag=relations0237-20"
					}
				]
			}
		],
		"comparison": {
			"columns": [
				"Gift",
				"Best for",
				"How personal"
			],
			"rows": [
				{
					"label": "Touch bracelets",
					"values": [
						"Feeling close daily",
						"High"
					]
				},
				{
					"label": "Touch lamps",
					"values": [
						"A quiet daily sign",
						"High"
					]
				},
				{
					"label": "Open when letters",
					"values": [
						"Hard days",
						"Very high"
					]
				},
				{
					"label": "Video date night kit",
					"values": [
						"Shared time",
						"Medium"
					]
				},
				{
					"label": "Care package",
					"values": [
						"Surprises",
						"High"
					]
				},
				{
					"label": "Distance map print",
					"values": [
						"Anniversaries",
						"Very high"
					]
				}
			]
		},
		"faq": [
			{
				"question": "What is the best gift for a long distance relationship?",
				"answer": "Something they use every day. Touch bracelets and touch lamps win because they create a small moment of connection daily, not just on the day you give them."
			},
			{
				"question": "Do touch bracelets work in different countries?",
				"answer": "Yes, as long as both phones have internet. They connect through an app, so 50 km or 5,000 km makes no difference. Check that both phones are supported before buying."
			},
			{
				"question": "What is a cheap but meaningful long distance gift?",
				"answer": "Love notes. A postbox of handwritten notes costs little and often makes people cry, because the value is in your words."
			},
			{
				"question": "When should I order a long distance Christmas gift?",
				"answer": "At least 2 to 3 weeks before Christmas if it ships internationally. December shipping gets slow, and nobody wants a gift that arrives on December 28."
			}
		]
	}
];

export function getGuide(slug: string): Guide | undefined {
	return guides.find((g) => g.slug === slug);
}

export function relatedGuides(guide: Guide, count = 3): Guide[] {
	const sameCat = guides.filter((g) => g.slug !== guide.slug && g.category === guide.category);
	const others = guides.filter((g) => g.slug !== guide.slug && g.category !== guide.category);
	return [...sameCat, ...others].slice(0, count);
}
