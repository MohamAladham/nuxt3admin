import { useUser, fetchCurrentUser } from "~/composables/useAuth";

export default defineNuxtPlugin(async () => {
  const user = useUser();

  // Skip if already initialized on server
  if (user.value !== undefined) return;

  // todo: enable it when you like
  // user.value = await fetchCurrentUser();
});
