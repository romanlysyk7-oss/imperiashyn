import { createNavigation } from "next-intl/navigation";
import { routing } from "../config/routing";

export const {
	Link,
	getPathname,
	redirect,
	usePathname,
	useRouter,
} = createNavigation(routing);
