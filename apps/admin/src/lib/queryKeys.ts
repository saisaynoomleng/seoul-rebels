export const queryKeys = {
  stockists: {
    all: ['stockists'] as const,
    bySlug: (slug: string) => ['stockists', slug] as const,
  },

  teamMembers: {
    all: ['teamMembers'] as const,
    bySlug: (slug: string) => ['teamMembers', slug] as const,
  },
};
