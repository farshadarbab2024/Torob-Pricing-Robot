import BaseApiService from "./_BaseApiService";

class Products extends BaseApiService {
  public static async getProducts(page: number) {
    await new Promise(resolve => setTimeout(resolve, 600)) ;
    switch (page) {
      case 1:
        return {
          has_more: true,
          products: [
            {
              id: 1,
              title: "Mini thermal printer model A748",
              sku: "AP-7829",
              current_price: 58.26,
              min_price: 56.0,
              torob_link:
                "https://torob.com/browse/926/%D9%BE%D8%B1%DB%8C%D9%86%D8%AA%D8%B1-%D8%AD%D8%B1%D8%A7%D8%B1%D8%AA%DB%8C-%D9%88-%D9%84%DB%8C%D8%A8%D9%84-%D8%B2%D9%86/",
              is_active: true,
              average_rank: 1.5,
              image:
                "https://image.torob.com/base/images/z_/k9/z_k94MKW5T5uULEx.jpg_/560x560.avif",
            },
            {
              id: 2,
              title: "Mini thermal printer model A748",
              sku: "AP-7829",
              current_price: 58.26,
              min_price: 56.0,
              torob_link:
                "https://torob.com/browse/926/%D9%BE%D8%B1%DB%8C%D9%86%D8%AA%D8%B1-%D8%AD%D8%B1%D8%A7%D8%B1%D8%AA%DB%8C-%D9%88-%D9%84%DB%8C%D8%A8%D9%84-%D8%B2%D9%86/",
              is_active: true,
              average_rank: 1.5,
              image:
                "https://image.torob.com/base/images/z_/k9/z_k94MKW5T5uULEx.jpg_/560x560.avif",
            },
            {
              id: 3,
              title: "Mini thermal printer model A748",
              sku: "AP-7829",
              current_price: 58.26,
              min_price: 56.0,
              torob_link:
                "https://torob.com/browse/926/%D9%BE%D8%B1%DB%8C%D9%86%D8%AA%D8%B1-%D8%AD%D8%B1%D8%A7%D8%B1%D8%AA%DB%8C-%D9%88-%D9%84%DB%8C%D8%A8%D9%84-%D8%B2%D9%86/",
              is_active: true,
              average_rank: 1.5,
              image:
                "https://image.torob.com/base/images/z_/k9/z_k94MKW5T5uULEx.jpg_/560x560.avif",
            },
          ],
        };
      case 2:
        return {
          has_more: true,
          products: [
            {
              id: 4,
              title: "Mini thermal printer model A748",
              sku: "AP-7829",
              current_price: 58.26,
              min_price: 56.0,
              torob_link:
                "https://torob.com/browse/926/%D9%BE%D8%B1%DB%8C%D9%86%D8%AA%D8%B1-%D8%AD%D8%B1%D8%A7%D8%B1%D8%AA%DB%8C-%D9%88-%D9%84%DB%8C%D8%A8%D9%84-%D8%B2%D9%86/",
              is_active: true,
              average_rank: 1.5,
              image:
                "https://image.torob.com/base/images/z_/k9/z_k94MKW5T5uULEx.jpg_/560x560.avif",
            },
            {
              id: 5,
              title: "Mini thermal printer model A748",
              sku: "AP-7829",
              current_price: 58.26,
              min_price: 56.0,
              torob_link:
                "https://torob.com/browse/926/%D9%BE%D8%B1%DB%8C%D9%86%D8%AA%D8%B1-%D8%AD%D8%B1%D8%A7%D8%B1%D8%AA%DB%8C-%D9%88-%D9%84%DB%8C%D8%A8%D9%84-%D8%B2%D9%86/",
              is_active: true,
              average_rank: 1.5,
              image:
                "https://image.torob.com/base/images/z_/k9/z_k94MKW5T5uULEx.jpg_/560x560.avif",
            },
            {
              id: 6,
              title: "Mini thermal printer model A748",
              sku: "AP-7829",
              current_price: 58.26,
              min_price: 56.0,
              torob_link:
                "https://torob.com/browse/926/%D9%BE%D8%B1%DB%8C%D9%86%D8%AA%D8%B1-%D8%AD%D8%B1%D8%A7%D8%B1%D8%AA%DB%8C-%D9%88-%D9%84%DB%8C%D8%A8%D9%84-%D8%B2%D9%86/",
              is_active: true,
              average_rank: 1.5,
              image:
                "https://image.torob.com/base/images/z_/k9/z_k94MKW5T5uULEx.jpg_/560x560.avif",
            },
          ],
        };

      case 3:
        return {
          has_more: false,
          products: [
            {
              id: 7,
              title: "Mini thermal printer model A748",
              sku: "AP-7829",
              current_price: 58.26,
              min_price: 56.0,
              torob_link:
                "https://torob.com/browse/926/%D9%BE%D8%B1%DB%8C%D9%86%D8%AA%D8%B1-%D8%AD%D8%B1%D8%A7%D8%B1%D8%AA%DB%8C-%D9%88-%D9%84%DB%8C%D8%A8%D9%84-%D8%B2%D9%86/",
              is_active: true,
              average_rank: 1.5,
              image:
                "https://image.torob.com/base/images/z_/k9/z_k94MKW5T5uULEx.jpg_/560x560.avif",
            },
            {
              id: 8,
              title: "Mini thermal printer model A748",
              sku: "AP-7829",
              current_price: 58.26,
              min_price: 56.0,
              torob_link:
                "https://torob.com/browse/926/%D9%BE%D8%B1%DB%8C%D9%86%D8%AA%D8%B1-%D8%AD%D8%B1%D8%A7%D8%B1%D8%AA%DB%8C-%D9%88-%D9%84%DB%8C%D8%A8%D9%84-%D8%B2%D9%86/",
              is_active: true,
              average_rank: 1.5,
              image:
                "https://image.torob.com/base/images/z_/k9/z_k94MKW5T5uULEx.jpg_/560x560.avif",
            },
            {
              id: 9,
              title: "Mini thermal printer model A748",
              sku: "AP-7829",
              current_price: 58.26,
              min_price: 56.0,
              torob_link:
                "https://torob.com/browse/926/%D9%BE%D8%B1%DB%8C%D9%86%D8%AA%D8%B1-%D8%AD%D8%B1%D8%A7%D8%B1%D8%AA%DB%8C-%D9%88-%D9%84%DB%8C%D8%A8%D9%84-%D8%B2%D9%86/",
              is_active: true,
              average_rank: 1.5,
              image:
                "https://image.torob.com/base/images/z_/k9/z_k94MKW5T5uULEx.jpg_/560x560.avif",
            },
          ],
        };
      default:
        return {
          has_more: false,
          products: [],
        };
    }
  }
}

export default Products;
