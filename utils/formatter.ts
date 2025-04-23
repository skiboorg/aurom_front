export function priceFormat(price: number ): string {
    return new Intl.NumberFormat('ru-RU', {
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
    }).format(price);
}

export function priceFixed(price: string ): string {
    return parseFloat(price).toFixed(2)
}

export function normalizeArticleNR(article_nr: string ): string {
    return article_nr.replace(/[^a-zA-Zа-яА-Я0-9]/g, '')
}