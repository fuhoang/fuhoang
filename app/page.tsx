import { cookies, headers } from "next/headers";
import { redirect } from "next/navigation";
import {
  defaultLocale,
  getPreferredLocale,
  isLocale,
} from "@/components/i18n/config";

export default async function HomeRedirect() {
  const cookieStore = await cookies();
  const headerStore = await headers();
  const cookieLocale = cookieStore.get("locale")?.value;
  const locale = isLocale(cookieLocale)
    ? cookieLocale
    : getPreferredLocale(headerStore.get("accept-language")) ?? defaultLocale;

  redirect(`/${locale}`);
}
