import type { Metadata } from "next";

export const metadata: Metadata = {
title: "Faruk Electric & AC Servicing",
description:
"Electric service, AC servicing, plumbing and wall repairing across Bangladesh.",
};

export default function RootLayout({
children,
}: Readonly<{
children: React.ReactNode;
}>) {
return (
<html lang="bn">
<body style={{ margin: 0, background: "#ffffff", color: "#222222" }}>
{children}
</body>
</html>
);
}