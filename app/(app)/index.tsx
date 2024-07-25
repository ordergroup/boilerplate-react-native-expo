import React, { Fragment, useMemo } from 'react';
import { appActions } from '@/modules/app/actions';
import { appSelectors } from '@/modules/app/selectors';
import { AppState } from '@/modules/app/slice.types';
import { useAppDispatch, useAppSelector } from '@/modules/app/store';
import { useGetTodosQuery } from '@/modules/dashboard/services/api';
import { Button, Divider, Text } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';

const HomeScreen = () => {
  const dispatch = useAppDispatch();
  const mode = useAppSelector(appSelectors.getThemeMode);
  const oppositeMode = mode === 'dark' ? 'light' : 'dark';

  const { data: todosData } = useGetTodosQuery();

  const changeThemeMode = (mode: AppState['themeMode']) => {
    dispatch(appActions.changeThemeMode(mode));
  };

  const todos = useMemo(() => {
    return todosData?.map(todo => (
      <Fragment key={todo.id}>
        {!todo.completed && <Text>{todo.title}</Text>}
        <Divider />
      </Fragment>
    ));
  }, [todosData]);

  return (
    <SafeAreaView>
      <Text>DashboardScreen</Text>
      <Button onPress={() => changeThemeMode(oppositeMode)}>
        Change theme mode to {oppositeMode}
      </Button>
      {todos}
    </SafeAreaView>
  );
};

export default HomeScreen;
