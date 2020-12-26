import { NavigationProp, ParamListBase } from '@react-navigation/native';
import type { CompatNavigationProp } from './types';
export default function useCompatNavigation<T extends NavigationProp<ParamListBase>>(): CompatNavigationProp<T, T extends NavigationProp<infer P, string, Readonly<{
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
}>, {}, {}> ? P : Record<string, object | undefined>, Extract<T extends NavigationProp<any, infer R, Readonly<{
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
}>, {}, {}> ? R : string, string>>;
