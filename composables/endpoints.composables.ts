import { useUiStore } from '~/store/ui.store';
import type { ApiEndpoints } from '~/enums/api.enums';
import { API_METHODS } from '~/enums/api.enums';
import type { NuxtError } from '#app';
import { useShowNotification } from '~/composables/notification_alert.composables';

export const useEndpoints = () => {
  const { loading } = storeToRefs(useUiStore());

  const { showFailure } = useShowNotification();

  const { t } = useTranslations();

  const apiCreate = async <TBody, TResponse>(
    body: TBody,
    endPoint: ApiEndpoints,
  ): Promise<{ data?: TResponse; success: boolean }> => {
    try {
      loading.value = true;
      const { error, data } = await useFetch<TResponse>(endPoint, {
        method: API_METHODS.POST,
        body,
      } as never);
      if (error.value) throw createError(error.value as NuxtError);
      return { success: true, data: data.value as TResponse };
    }
    catch (err) {
      return resolveError(err as NuxtError);
    }
    finally {
      loading.value = false;
    }
  };

  const apiUpdate = async <TBody, TResponse>(
    id: string,
    body: TBody,
    endPoint: ApiEndpoints,
  ): Promise<{ data?: TResponse; success: boolean }> => {
    try {
      loading.value = true;
      const { error, data } = await useFetch<TResponse>(`${endPoint}/${id}`, {
        method: API_METHODS.PATCH,
        body,
      } as never);
      if (error.value) throw createError(error.value as NuxtError);
      return { success: true, data: data.value as TResponse };
    }
    catch (err) {
      return resolveError(err as NuxtError);
    }
    finally {
      loading.value = false;
    }
  };

  const apiQuery = async <TResponse>(
    endPoint: ApiEndpoints,
  ): Promise<{ data?: TResponse; success: boolean }> => {
    try {
      loading.value = true;
      const { error, data } = await useFetch<TResponse>(endPoint, {
        method: API_METHODS.GET,
      } as never);
      if (error.value) throw createError(error.value as NuxtError);
      return { success: true, data: data.value as TResponse };
    }
    catch (err) {
      return resolveError(err as NuxtError);
    }
    finally {
      loading.value = false;
    }
  };

  const apiDelete = async (
    id: string,
    endPoint: ApiEndpoints,
  ): Promise<{ data?: string; success: boolean }> => {
    try {
      loading.value = true;
      const { error, data } = await useFetch<string>(`${endPoint}/${id}`, {
        method: API_METHODS.DELETE,
      } as never);
      if (error.value) throw createError(error.value as NuxtError);
      return { success: true, data: data.value as string };
    }
    catch (err) {
      return resolveError(err as NuxtError);
    }
    finally {
      loading.value = false;
    }
  };

  const resolveError = (err: NuxtError) => {
    showFailure({
      title: err.statusCode ? String(err.statusCode) : t('notification.failure'),
      text: err.statusMessage,
    });
    return { success: false };
  };

  return {
    apiCreate,
    apiQuery,
    apiDelete,
    apiUpdate,
  };
};
