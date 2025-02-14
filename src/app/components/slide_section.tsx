export type SlideSection = {
    id: number;
    title: string;
    component: () => React.ReactNode;
}
