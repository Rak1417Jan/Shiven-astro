/**
 * Static/mock data for subscriber dashboard pages.
 * Stub exports so pages resolve; replace with real data as needed.
 */

/** Permissive type so subscriber pages can render stub data without strict typing. */
type WithId = { id: string; name?: string; [k: string]: string | number | boolean | undefined };

export const mockAdCampaigns: { id: string; name: string; status: string; spend: number; reach: number }[] = [];
export const websiteUpdatesStatic: Record<string, { title?: string; items?: unknown[] }> = {};
export const mockReportTypes: WithId[] = [];
export const mockLocations: WithId[] = [];
export const eventsStatic: Record<string, { title?: string; items?: unknown[] }> = {};
export const mockForms: WithId[] = [];
export const communicationsStatic: Record<string, { title: string; items: unknown[] }> = {};
export const mockReviews: WithId[] = [];
export const mockReviewStats = { total: 0, average: 0 };
export const mockAnalytics: { label: string; value: string | number }[] = [];
export const servicesStatic: Record<string, { title?: string; items?: unknown[] }> = {};
export const mockMailingList: WithId[] = [];
export const mockQuestions: WithId[] = [];
export const mockConsultationSlots: WithId[] = [];
export const mockFiles: WithId[] = [];
export const mockQueries: WithId[] = [];
export const panchangStatic: Record<string, { title?: string; items?: unknown[] }> = {};
export const mockServiceRequests: WithId[] = [];
export const mockLibraries: WithId[] = [];
export const mockCrmContacts: WithId[] = [];
export const resourcesStatic: Record<string, { title?: string; items?: unknown[] }> = {};
export const mockContacts: WithId[] = [];
export const mockLeads: WithId[] = [];
export const learningStatic: Record<string, { title?: string; items?: unknown[] }> = {};
export const mockInvoices: WithId[] = [];
export const mockMailerCampaigns: WithId[] = [];
export const mockWallet = { balance: 0 };
export const mockWalletHistory: WithId[] = [];
export const mockSubscriptions: WithId[] = [];
export const mockRetailPurchases: WithId[] = [];
export const mockReferralStats = { total: 0 };
export const mockReferralList: WithId[] = [];
export const mockProducts: WithId[] = [];
