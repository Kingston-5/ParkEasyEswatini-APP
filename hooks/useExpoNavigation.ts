import { useNavigation } from 'expo-router';

export function useExpoNavigation() {
  const navigation = useNavigation();

  const navigateTo = (routeName: string, params?: object) => {
    navigation.navigate({
      name: routeName,
      params: params,
    });
  };

  return {
    navigateTo,
  };
}