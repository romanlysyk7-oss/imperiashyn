import { apiFetch } from "@/shared/api/fetcher";
import { baseEndpoints } from "@/config/api";
import type { AliasAll, Pages } from "../model/alias.types";

export const getAliasAll = () =>
	apiFetch<AliasAll>(baseEndpoints.statiAlias.all);

export const getAliasById = (id: string) =>
	apiFetch<Pages>(baseEndpoints.statiAlias.byId(id));
