import '@shopify/ui-extensions';

//@ts-ignore
declare module './src/MenuItemModal.tsx' {
  const shopify: import('@shopify/ui-extensions/pos.cart.line-item-details.action.render').Api;
  const globalThis: { shopify: typeof shopify };
}

//@ts-ignore
declare module './src/MenuItem.tsx' {
  const shopify: import('@shopify/ui-extensions/pos.cart.line-item-details.action.menu-item.render').Api;
  const globalThis: { shopify: typeof shopify };
}

//@ts-ignore
declare module './src/Tile.tsx' {
  const shopify: import('@shopify/ui-extensions/pos.home.tile.render').Api;
  const globalThis: { shopify: typeof shopify };
}

//@ts-ignore
declare module './src/TileModal.tsx' {
  const shopify: import('@shopify/ui-extensions/pos.home.modal.render').Api;
  const globalThis: { shopify: typeof shopify };
}

//@ts-ignore
declare module './src/screens/SubscriptionScreen.tsx' {
  const shopify:
    | import('@shopify/ui-extensions/pos.cart.line-item-details.action.render').Api
    | import('@shopify/ui-extensions/pos.home.modal.render').Api;
  const globalThis: { shopify: typeof shopify };
}

//@ts-ignore
declare module './src/components/I18nProvider.tsx' {
  const shopify:
    | import('@shopify/ui-extensions/pos.cart.line-item-details.action.render').Api
    | import('@shopify/ui-extensions/pos.cart.line-item-details.action.menu-item.render').Api
    | import('@shopify/ui-extensions/pos.home.tile.render').Api
    | import('@shopify/ui-extensions/pos.home.modal.render').Api;
  const globalThis: { shopify: typeof shopify };
}

//@ts-ignore
declare module './src/i18n/config.ts' {
  const shopify:
    | import('@shopify/ui-extensions/pos.cart.line-item-details.action.render').Api
    | import('@shopify/ui-extensions/pos.cart.line-item-details.action.menu-item.render').Api
    | import('@shopify/ui-extensions/pos.home.tile.render').Api
    | import('@shopify/ui-extensions/pos.home.modal.render').Api;
  const globalThis: { shopify: typeof shopify };
}

//@ts-ignore
declare module './src/utils/asyncState.ts' {
  const shopify:
    | import('@shopify/ui-extensions/pos.cart.line-item-details.action.render').Api
    | import('@shopify/ui-extensions/pos.home.modal.render').Api;
  const globalThis: { shopify: typeof shopify };
}

//@ts-ignore
declare module './src/components/PlanItem.tsx' {
  const shopify:
    | import('@shopify/ui-extensions/pos.cart.line-item-details.action.render').Api
    | import('@shopify/ui-extensions/pos.home.modal.render').Api;
  const globalThis: { shopify: typeof shopify };
}

//@ts-ignore
declare module './src/components/VariantInfo.tsx' {
  const shopify:
    | import('@shopify/ui-extensions/pos.cart.line-item-details.action.render').Api
    | import('@shopify/ui-extensions/pos.home.modal.render').Api;
  const globalThis: { shopify: typeof shopify };
}

//@ts-ignore
declare module './src/utils/currencyFormatter.ts' {
  const shopify:
    | import('@shopify/ui-extensions/pos.cart.line-item-details.action.render').Api
    | import('@shopify/ui-extensions/pos.home.modal.render').Api;
  const globalThis: { shopify: typeof shopify };
}

//@ts-ignore
declare module './src/utils/cart.ts' {
  const shopify:
    | import('@shopify/ui-extensions/pos.cart.line-item-details.action.render').Api
    | import('@shopify/ui-extensions/pos.home.tile.render').Api
    | import('@shopify/ui-extensions/pos.home.modal.render').Api;
  const globalThis: { shopify: typeof shopify };
}

//@ts-ignore
declare module './src/types.ts' {
  const shopify:
    | import('@shopify/ui-extensions/pos.cart.line-item-details.action.render').Api
    | import('@shopify/ui-extensions/pos.home.modal.render').Api;
  const globalThis: { shopify: typeof shopify };
}

//@ts-ignore
declare module './src/hooks/useSubscriptionScreen.ts' {
  const shopify:
    | import('@shopify/ui-extensions/pos.cart.line-item-details.action.render').Api
    | import('@shopify/ui-extensions/pos.home.modal.render').Api;
  const globalThis: { shopify: typeof shopify };
}

//@ts-ignore
declare module './src/hooks/useSellingPlans.ts' {
  const shopify:
    | import('@shopify/ui-extensions/pos.cart.line-item-details.action.render').Api
    | import('@shopify/ui-extensions/pos.home.modal.render').Api;
  const globalThis: { shopify: typeof shopify };
}

//@ts-ignore
declare module './src/hooks/useProductVariant.ts' {
  const shopify:
    | import('@shopify/ui-extensions/pos.cart.line-item-details.action.render').Api
    | import('@shopify/ui-extensions/pos.home.modal.render').Api;
  const globalThis: { shopify: typeof shopify };
}

//@ts-ignore
declare module './src/foundation/api/useGraphqlQuery.ts' {
  const shopify:
    | import('@shopify/ui-extensions/pos.cart.line-item-details.action.render').Api
    | import('@shopify/ui-extensions/pos.home.modal.render').Api;
  const globalThis: { shopify: typeof shopify };
}

//@ts-ignore
declare module './src/constants/constants.ts' {
  const shopify:
    | import('@shopify/ui-extensions/pos.cart.line-item-details.action.render').Api
    | import('@shopify/ui-extensions/pos.cart.line-item-details.action.menu-item.render').Api
    | import('@shopify/ui-extensions/pos.home.tile.render').Api
    | import('@shopify/ui-extensions/pos.home.modal.render').Api;
  const globalThis: { shopify: typeof shopify };
}

//@ts-ignore
declare module './src/graphql/SellingPlansQuery.ts' {
  const shopify:
    | import('@shopify/ui-extensions/pos.cart.line-item-details.action.render').Api
    | import('@shopify/ui-extensions/pos.home.modal.render').Api;
  const globalThis: { shopify: typeof shopify };
}

//@ts-ignore
declare module './locales/cs.json' {
  const shopify:
    | import('@shopify/ui-extensions/pos.cart.line-item-details.action.render').Api
    | import('@shopify/ui-extensions/pos.cart.line-item-details.action.menu-item.render').Api
    | import('@shopify/ui-extensions/pos.home.tile.render').Api
    | import('@shopify/ui-extensions/pos.home.modal.render').Api;
  const globalThis: { shopify: typeof shopify };
}

//@ts-ignore
declare module './locales/da.json' {
  const shopify:
    | import('@shopify/ui-extensions/pos.cart.line-item-details.action.render').Api
    | import('@shopify/ui-extensions/pos.cart.line-item-details.action.menu-item.render').Api
    | import('@shopify/ui-extensions/pos.home.tile.render').Api
    | import('@shopify/ui-extensions/pos.home.modal.render').Api;
  const globalThis: { shopify: typeof shopify };
}

//@ts-ignore
declare module './locales/de.json' {
  const shopify:
    | import('@shopify/ui-extensions/pos.cart.line-item-details.action.render').Api
    | import('@shopify/ui-extensions/pos.cart.line-item-details.action.menu-item.render').Api
    | import('@shopify/ui-extensions/pos.home.tile.render').Api
    | import('@shopify/ui-extensions/pos.home.modal.render').Api;
  const globalThis: { shopify: typeof shopify };
}

//@ts-ignore
declare module './locales/en.default.json' {
  const shopify:
    | import('@shopify/ui-extensions/pos.cart.line-item-details.action.render').Api
    | import('@shopify/ui-extensions/pos.cart.line-item-details.action.menu-item.render').Api
    | import('@shopify/ui-extensions/pos.home.tile.render').Api
    | import('@shopify/ui-extensions/pos.home.modal.render').Api;
  const globalThis: { shopify: typeof shopify };
}

//@ts-ignore
declare module './locales/es.json' {
  const shopify:
    | import('@shopify/ui-extensions/pos.cart.line-item-details.action.render').Api
    | import('@shopify/ui-extensions/pos.cart.line-item-details.action.menu-item.render').Api
    | import('@shopify/ui-extensions/pos.home.tile.render').Api
    | import('@shopify/ui-extensions/pos.home.modal.render').Api;
  const globalThis: { shopify: typeof shopify };
}

//@ts-ignore
declare module './locales/fi.json' {
  const shopify:
    | import('@shopify/ui-extensions/pos.cart.line-item-details.action.render').Api
    | import('@shopify/ui-extensions/pos.cart.line-item-details.action.menu-item.render').Api
    | import('@shopify/ui-extensions/pos.home.tile.render').Api
    | import('@shopify/ui-extensions/pos.home.modal.render').Api;
  const globalThis: { shopify: typeof shopify };
}

//@ts-ignore
declare module './locales/fr.json' {
  const shopify:
    | import('@shopify/ui-extensions/pos.cart.line-item-details.action.render').Api
    | import('@shopify/ui-extensions/pos.cart.line-item-details.action.menu-item.render').Api
    | import('@shopify/ui-extensions/pos.home.tile.render').Api
    | import('@shopify/ui-extensions/pos.home.modal.render').Api;
  const globalThis: { shopify: typeof shopify };
}

//@ts-ignore
declare module './locales/it.json' {
  const shopify:
    | import('@shopify/ui-extensions/pos.cart.line-item-details.action.render').Api
    | import('@shopify/ui-extensions/pos.cart.line-item-details.action.menu-item.render').Api
    | import('@shopify/ui-extensions/pos.home.tile.render').Api
    | import('@shopify/ui-extensions/pos.home.modal.render').Api;
  const globalThis: { shopify: typeof shopify };
}

//@ts-ignore
declare module './locales/ja.json' {
  const shopify:
    | import('@shopify/ui-extensions/pos.cart.line-item-details.action.render').Api
    | import('@shopify/ui-extensions/pos.cart.line-item-details.action.menu-item.render').Api
    | import('@shopify/ui-extensions/pos.home.tile.render').Api
    | import('@shopify/ui-extensions/pos.home.modal.render').Api;
  const globalThis: { shopify: typeof shopify };
}

//@ts-ignore
declare module './locales/ko.json' {
  const shopify:
    | import('@shopify/ui-extensions/pos.cart.line-item-details.action.render').Api
    | import('@shopify/ui-extensions/pos.cart.line-item-details.action.menu-item.render').Api
    | import('@shopify/ui-extensions/pos.home.tile.render').Api
    | import('@shopify/ui-extensions/pos.home.modal.render').Api;
  const globalThis: { shopify: typeof shopify };
}

//@ts-ignore
declare module './locales/nb.json' {
  const shopify:
    | import('@shopify/ui-extensions/pos.cart.line-item-details.action.render').Api
    | import('@shopify/ui-extensions/pos.cart.line-item-details.action.menu-item.render').Api
    | import('@shopify/ui-extensions/pos.home.tile.render').Api
    | import('@shopify/ui-extensions/pos.home.modal.render').Api;
  const globalThis: { shopify: typeof shopify };
}

//@ts-ignore
declare module './locales/nl.json' {
  const shopify:
    | import('@shopify/ui-extensions/pos.cart.line-item-details.action.render').Api
    | import('@shopify/ui-extensions/pos.cart.line-item-details.action.menu-item.render').Api
    | import('@shopify/ui-extensions/pos.home.tile.render').Api
    | import('@shopify/ui-extensions/pos.home.modal.render').Api;
  const globalThis: { shopify: typeof shopify };
}

//@ts-ignore
declare module './locales/pl.json' {
  const shopify:
    | import('@shopify/ui-extensions/pos.cart.line-item-details.action.render').Api
    | import('@shopify/ui-extensions/pos.cart.line-item-details.action.menu-item.render').Api
    | import('@shopify/ui-extensions/pos.home.tile.render').Api
    | import('@shopify/ui-extensions/pos.home.modal.render').Api;
  const globalThis: { shopify: typeof shopify };
}

//@ts-ignore
declare module './locales/pt-BR.json' {
  const shopify:
    | import('@shopify/ui-extensions/pos.cart.line-item-details.action.render').Api
    | import('@shopify/ui-extensions/pos.cart.line-item-details.action.menu-item.render').Api
    | import('@shopify/ui-extensions/pos.home.tile.render').Api
    | import('@shopify/ui-extensions/pos.home.modal.render').Api;
  const globalThis: { shopify: typeof shopify };
}

//@ts-ignore
declare module './locales/pt-PT.json' {
  const shopify:
    | import('@shopify/ui-extensions/pos.cart.line-item-details.action.render').Api
    | import('@shopify/ui-extensions/pos.cart.line-item-details.action.menu-item.render').Api
    | import('@shopify/ui-extensions/pos.home.tile.render').Api
    | import('@shopify/ui-extensions/pos.home.modal.render').Api;
  const globalThis: { shopify: typeof shopify };
}

//@ts-ignore
declare module './locales/sv.json' {
  const shopify:
    | import('@shopify/ui-extensions/pos.cart.line-item-details.action.render').Api
    | import('@shopify/ui-extensions/pos.cart.line-item-details.action.menu-item.render').Api
    | import('@shopify/ui-extensions/pos.home.tile.render').Api
    | import('@shopify/ui-extensions/pos.home.modal.render').Api;
  const globalThis: { shopify: typeof shopify };
}

//@ts-ignore
declare module './locales/th.json' {
  const shopify:
    | import('@shopify/ui-extensions/pos.cart.line-item-details.action.render').Api
    | import('@shopify/ui-extensions/pos.cart.line-item-details.action.menu-item.render').Api
    | import('@shopify/ui-extensions/pos.home.tile.render').Api
    | import('@shopify/ui-extensions/pos.home.modal.render').Api;
  const globalThis: { shopify: typeof shopify };
}

//@ts-ignore
declare module './locales/tr.json' {
  const shopify:
    | import('@shopify/ui-extensions/pos.cart.line-item-details.action.render').Api
    | import('@shopify/ui-extensions/pos.cart.line-item-details.action.menu-item.render').Api
    | import('@shopify/ui-extensions/pos.home.tile.render').Api
    | import('@shopify/ui-extensions/pos.home.modal.render').Api;
  const globalThis: { shopify: typeof shopify };
}

//@ts-ignore
declare module './locales/zh-CN.json' {
  const shopify:
    | import('@shopify/ui-extensions/pos.cart.line-item-details.action.render').Api
    | import('@shopify/ui-extensions/pos.cart.line-item-details.action.menu-item.render').Api
    | import('@shopify/ui-extensions/pos.home.tile.render').Api
    | import('@shopify/ui-extensions/pos.home.modal.render').Api;
  const globalThis: { shopify: typeof shopify };
}

//@ts-ignore
declare module './locales/zh-TW.json' {
  const shopify:
    | import('@shopify/ui-extensions/pos.cart.line-item-details.action.render').Api
    | import('@shopify/ui-extensions/pos.cart.line-item-details.action.menu-item.render').Api
    | import('@shopify/ui-extensions/pos.home.tile.render').Api
    | import('@shopify/ui-extensions/pos.home.modal.render').Api;
  const globalThis: { shopify: typeof shopify };
}

//@ts-ignore
declare module './src/utils/versionComparison.ts' {
  const shopify:
    | import('@shopify/ui-extensions/pos.cart.line-item-details.action.menu-item.render').Api
    | import('@shopify/ui-extensions/pos.home.tile.render').Api;
  const globalThis: { shopify: typeof shopify };
}

//@ts-ignore
declare module './src/hooks/useSellingPlanTile.ts' {
  const shopify: import('@shopify/ui-extensions/pos.home.tile.render').Api;
  const globalThis: { shopify: typeof shopify };
}

//@ts-ignore
declare module './src/utils/locale.ts' {
  const shopify:
    | import('@shopify/ui-extensions/pos.home.tile.render').Api
    | import('@shopify/ui-extensions/pos.home.modal.render').Api;
  const globalThis: { shopify: typeof shopify };
}

//@ts-ignore
declare module './src/screens/EligibleLineItemsScreen.tsx' {
  const shopify: import('@shopify/ui-extensions/pos.home.modal.render').Api;
  const globalThis: { shopify: typeof shopify };
}

//@ts-ignore
declare module './src/components/EligibleLineItem.tsx' {
  const shopify: import('@shopify/ui-extensions/pos.home.modal.render').Api;
  const globalThis: { shopify: typeof shopify };
}

//@ts-ignore
declare module './src/hooks/useEligibleLineItems.ts' {
  const shopify: import('@shopify/ui-extensions/pos.home.modal.render').Api;
  const globalThis: { shopify: typeof shopify };
}
