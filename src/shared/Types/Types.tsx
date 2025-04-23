export enum SelectedPage{
Home = 'home',
Benefits = 'benefits',
OurClasses = 'ourclasses',
ContactUs = 'contactus',
}
export interface  BenefitsType{
icon: React.ReactNode;
title: string;
description: string;
}
export interface ClassType{
title: string;
description?: string;
image: string
}