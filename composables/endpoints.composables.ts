import { useUiStore } from '~/store/ui.store';
import type { ApiEndpoints } from '~/enums/api.enums';
import { ApiMethods } from '~/enums/api.enums';
import type { NuxtError } from '#app';
import { STRINGS } from '~/constants/strings.constants';
import { useShowNotification } from '~/composables/notification_alert.composables';

export const useEndpoints = () => {
  const { loading } = storeToRefs(useUiStore());

  const { showFailure } = useShowNotification();

  const apiMutate = async <TBody, TResponse>(
    body: TBody,
    endPoint: ApiEndpoints,
    method: ApiMethods = ApiMethods.Post,
  ): Promise<{ data?: TResponse; success: boolean }> => {
    const success = true;
    try {
      loading.value = true;
      const { error, data } = await useFetch<TResponse>(endPoint, {
        method,
        body,
      } as never);
      if (error.value) throw createError(error.value as NuxtError);
      return { success, data: data.value as TResponse };
    }
    catch (err) {
      const error = err as NuxtError;
      showFailure({
        title: error.statusCode ? String(error.statusCode) : STRINGS.notification.failure,
        text: error.statusMessage,
      });
      return { success: false };
    }
    finally {
      loading.value = false;
    }
  };

  return {
    apiMutate,
  };
};
