export type IOffer = {
    currentPage: number;
    pageSize: number;
    totalResults: number;
    currentResults: number;
    totalPages: number;
    availableSortingMethods: string[];
    sortBy: string;
    items: Item[];
    offers: Item[];
    categories: Category[];
};

export type Item = {
    id: string;
    title: string;
    province: Category;
    city: string;
    link: string;
    category: Category;
    contractType: Category;
    subcategory: Category;
    salaryMin: Category;
    salaryMax: Category;
    salaryPeriod: Category;
    experienceMin: Category;
    workDay: Category;
    study: Category;
    published: Date;
    updated: Date;
    author: Author;
    requirementMin: string;
    bold: boolean;
    applications: string;
    urgent: boolean;
};

export type Author = {
    id: string;
    name: string;
    uri: string;
};

export type Category = IValuable<number>;
