/// <reference types="react" />
import { DefaultNavigatorOptions, TabRouterOptions } from '@react-navigation/native';
declare type Props = DefaultNavigatorOptions<{}> & TabRouterOptions;
declare const _default: <NavigationPropType extends import("@react-navigation/native").NavigationProp<any, any, any, any, any>, ParamList extends Record<string, object | undefined> = NavigationPropType extends import("@react-navigation/native").NavigationProp<infer P, string, Readonly<{
    key: string;
    index: number;
    routeNames: string[];
    history?: unknown[] | undefined;
    routes: (Readonly<{
        key: string;
        name: string;
        params?: object | undefined;
    }> & {
        state?: Readonly<any> | import("@react-navigation/native").PartialState<Readonly<any>> | undefined;
    })[];
    type: string;
    stale: false;
}>, {}, {}> ? P : Record<string, object | undefined>, ScreenOptions extends {} = NavigationPropType extends import("@react-navigation/native").NavigationProp<any, any, any, infer O, {}> ? O : {}, NavigationConfig extends {} = (Pick<Props, "backBehavior"> & Pick<DefaultNavigatorOptions<{}>, "children" | "screenOptions"> & {
    initialRouteName?: string | undefined;
}) | import("react").PropsWithChildren<Pick<Props, "backBehavior"> & Pick<DefaultNavigatorOptions<{}>, "children" | "screenOptions"> & {
    initialRouteName?: string | undefined;
}>>(routeConfig: import("./types").CompatRouteConfig<NavigationPropType, NavigationPropType extends import("@react-navigation/native").NavigationProp<infer P_1, string, Readonly<{
    key: string;
    index: number;
    routeNames: string[];
    history?: unknown[] | undefined;
    routes: (Readonly<{
        key: string;
        name: string;
        params?: object | undefined;
    }> & {
        state?: Readonly<any> | import("@react-navigation/native").PartialState<Readonly<any>> | undefined;
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
export default _default;
