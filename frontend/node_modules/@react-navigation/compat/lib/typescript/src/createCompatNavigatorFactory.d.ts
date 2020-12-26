import * as React from 'react';
import { NavigationState, PartialState, ParamListBase, TypedNavigator, NavigationProp } from '@react-navigation/native';
import type { CompatRouteConfig } from './types';
export default function createCompatNavigatorFactory<CreateNavigator extends () => TypedNavigator<ParamListBase, NavigationState, {}, any, React.ComponentType<any>>>(createNavigator: CreateNavigator): <NavigationPropType extends NavigationProp<any, any, any, any, any>, ParamList extends Record<string, object | undefined> = NavigationPropType extends NavigationProp<infer P, string, Readonly<{
    key: string;
    index: number;
    routeNames: string[];
    history?: unknown[] | undefined;
    routes: (Readonly<{
        key: string;
        name: string;
        params?: object | undefined;
    }> & {
        state?: Readonly<any> | PartialState<Readonly<any>> | undefined;
    })[];
    type: string;
    stale: false;
}>, {}, {}> ? P : Record<string, object | undefined>, ScreenOptions extends {} = NavigationPropType extends NavigationProp<any, any, any, infer O, {}> ? O : {}, NavigationConfig extends {} = React.ComponentProps<ReturnType<CreateNavigator>["Navigator"]>>(routeConfig: CompatRouteConfig<NavigationPropType, NavigationPropType extends NavigationProp<infer P_1, string, Readonly<{
    key: string;
    index: number;
    routeNames: string[];
    history?: unknown[] | undefined;
    routes: (Readonly<{
        key: string;
        name: string;
        params?: object | undefined;
    }> & {
        state?: Readonly<any> | PartialState<Readonly<any>> | undefined;
    })[];
    type: string;
    stale: false;
}>, {}, {}> ? P_1 : Record<string, object | undefined>>, navigationConfig?: Partial<Pick<NavigationConfig, Exclude<keyof NavigationConfig, "screenOptions">>> & {
    order?: Extract<keyof ParamList, string>[] | undefined;
    defaultNavigationOptions?: ScreenOptions | undefined;
    navigationOptions?: Record<string, any> | undefined;
}) => {
    ({ screenProps }: {
        screenProps?: unknown;
    }): JSX.Element;
    navigationOptions: Record<string, any> | undefined;
};
