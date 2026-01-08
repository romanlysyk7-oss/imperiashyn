import { baseEndpoints } from '@/config/api';
import type { ConfigSettingsApi } from '@/entities/settings/api/types';
import { apiFetch } from '@/shared/api/fetcher';

export const getSettings = () =>
	apiFetch<ConfigSettingsApi>(baseEndpoints.settings);
