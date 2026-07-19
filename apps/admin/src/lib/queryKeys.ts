export const queryKeys = {
  stockists: {
    all: ['stockists'] as const,
    bySlug: (slug: string) => ['stockists', slug] as const,
  },
};
