import type { Metadata } from "next";
import { headers } from "next/headers";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import Providers from "@/components/Providers";
import { siteConfig } from "@/content/site.config";
import { THEME_BOOT_SCRIPT } from "@/lib/theme-boot";
import "./globals.css";

const inter = Inter({
	subsets: ["latin"],
	display: "swap",
	variable: "--font-inter",
});

const siteUrl = (
	process.env.NEXT_PUBLIC_SITE_URL ||
	(process.env.VERCEL_PROJECT_PRODUCTION_URL
		? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
		: "https://example.com")
).replace(/\/$/, "");

const title = siteConfig.communityName;
const description =
	"上海及周边城市的开发者与 AI 爱好者社区，围绕 Grok、Grok Bot 与 Cursor 的线下活动。";
const ogImage = siteConfig.ogImage || "/og.jpg";

export const metadata: Metadata = {
	metadataBase: new URL(siteUrl),
	title: {
		default: title,
		template: `%s | ${title}`,
	},
	description,
	alternates: {
		canonical: siteUrl,
	},
	openGraph: {
		title,
		description,
		type: "website",
		url: siteUrl,
		siteName: title,
		locale: "zh_CN",
		alternateLocale: ["en_US"],
		images: [
			{
				url: ogImage,
				width: 1200,
				height: 630,
				alt: title,
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		title,
		description,
		images: [ogImage],
	},
};

export default async function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	const headersList = await headers();
	const nonce = headersList.get("x-nonce") ?? "";

	return (
		<html lang={siteConfig.defaultLocale} suppressHydrationWarning>
			<head>
				<script
					nonce={nonce || undefined}
					dangerouslySetInnerHTML={{ __html: THEME_BOOT_SCRIPT }}
				/>
			</head>
			<body className={`${inter.variable} antialiased`}>
				<Providers>{children}</Providers>
				<Analytics />
			</body>
		</html>
	);
}
