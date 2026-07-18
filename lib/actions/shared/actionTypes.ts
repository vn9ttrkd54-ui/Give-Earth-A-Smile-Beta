export type ActionError = {
  field?: string;
  message: string;
};

export type ActionResult<TData = undefined> =
  | {
      success: true;
      data: TData;
      message?: string;
    }
  | {
      success: false;
      error: string;
      fieldErrors?: Record<string, string[]>;
    };

export type DeleteActionResult = ActionResult<{
  id: string;
}>;

export type MutationActionResult<TData> =
  ActionResult<TData>;

export function actionSuccess<TData>(
  data: TData,
  message?: string,
): ActionResult<TData> {
  return {
    success: true,
    data,
    message,
  };
}

export function actionFailure(
  error: string,
  fieldErrors?: Record<string, string[]>,
): ActionResult<never> {
  return {
    success: false,
    error,
    fieldErrors,
  };
}