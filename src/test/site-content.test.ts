import { describe, expect, it } from "vitest";
import { QueryClient } from "@tanstack/react-query";
import { createRouter, rootRouteId } from "@tanstack/react-router";

import { routeTree } from "@/routeTree.gen";

describe("Nova Star pages", () => {
  const router = createRouter({ routeTree, context: { queryClient: new QueryClient() } });
  for (const path of ["/about", "/services", "/portfolio", "/pricing", "/faq", "/contact"]) {
    it(`has a page for ${path}`, () => {
      expect(router.matchRoutes(path).at(-1)?.routeId).not.toBe(rootRouteId);
    });
  }
});
