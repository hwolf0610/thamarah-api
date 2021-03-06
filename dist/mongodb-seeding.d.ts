export declare class SeedDatabse {
    private addresses;
    private banners;
    private business;
    private carts;
    private categories;
    private chats;
    private coupons;
    private deals;
    private deliveryBoyRatings;
    private favourites;
    private languages;
    private notifications;
    private orders;
    private orderProducts;
    private pages;
    private productOutOfStocks;
    private products;
    private ratings;
    private sequences;
    private settings;
    private subCategories;
    private users;
    private wallets;
    private production;
    private connectionUrl;
    constructor();
    connect(): void;
    reset(): Promise<void>;
    deleteCollections(): Promise<void>;
    setForProduction(): Promise<void>;
    setOthers(): Promise<void>;
    setLanguage(): Promise<void>;
    setSettings(): Promise<void>;
}
