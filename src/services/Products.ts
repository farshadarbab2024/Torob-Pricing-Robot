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
              title: "iPhone 16 | 128GB Dual SIM",
              sku: "AP-7830",
              current_price: 876.00,
              min_price: 840.00,
              torob_link:
                "https://image.torob.com/base/images/Ma/XS/MaXSNWRSNEAFsbv5.jpg_/560x560.avif",
              is_active: false,
              average_rank: 1.8,
              image:
                "https://image.torob.com/base/images/Ma/XS/MaXSNWRSNEAFsbv5.jpg_/560x560.avif",
            },
            {
              id: 3,
              title: "Samsung S25 Ultra Replica Phone | 256GB Storage, 12GB RAM",
              sku: "AP-7222",
              current_price: 38.26,
              min_price: 26.0,
              torob_link:
                "https://image.torob.com/base/images/5g/TM/5gTMSzturoYy5B3h.jpg_/560x560.avif",
              is_active: false,
              average_rank: 2.2,
              image:
                "https://image.torob.com/base/images/5g/TM/5gTMSzturoYy5B3h.jpg_/560x560.avif",
            },
          ],
        };
      case 2:
        return {
          has_more: true,
          products: [
            {
              id: 4,
              title: "Samsung A26 5G Phone | 128GB Storage, 6GB RAM",
              sku: "AP-7919",
              current_price: 240.99,
              min_price: 220.99,
              torob_link:
                "https://image.torob.com/base/images/_M/MH/_MMHIpXsKL6MrcwM.jpg_/560x560.avif",
              is_active: true,
              average_rank: 3.1,
              image:
                "https://image.torob.com/base/images/_M/MH/_MMHIpXsKL6MrcwM.jpg_/560x560.avif",
            },
            {
              id: 5,
              title: "P9 Wireless AirPods Max Headphones",
              sku: "AP-4825",
              current_price: 96.26,
              min_price: 86.0,
              torob_link:
                "https://image.torob.com/base/images/3-/Ip/3-IpBnk8aHGdlL4j.jpg_/560x560.avif",
              is_active: true,
              average_rank: 2.5,
              image:
                "https://image.torob.com/base/images/3-/Ip/3-IpBnk8aHGdlL4j.jpg_/560x560.avif",
            },
            {
              id: 6,
              title: "Mini thermal printer model A748",
              sku: "AP-7829",
              current_price: 345.26,
              min_price: 330.0,
              torob_link:
                "https://image.torob.com/base/images/oK/nK/oKnKTmFBEe5VVfWU.webp_/560x560.avif",
              is_active: false,
              average_rank: 1.0,
              image:
                "https://image.torob.com/base/images/oK/nK/oKnKTmFBEe5VVfWU.webp_/560x560.avif",
            },
          ],
        };

      case 3:
        return {
          has_more: false,
          products: [
            {
              id: 7,
              title: "Samsung Gear S2 Smartwatch with Rubber Strap",
              sku: "AP-7999",
              current_price: 100.26,
              min_price: 76.0,
              torob_link:
                "https://image.torob.com/base/images/bm/57/bm57MoUZnunCMHAy.jpg_/560x560.avif",
              is_active: true,
              average_rank: 1.8,
              image:
                "https://image.torob.com/base/images/bm/57/bm57MoUZnunCMHAy.jpg_/560x560.avif",
            },
            {
              id: 8,
              title: "Xiaomi Mi Band 10 Smart Bracelet with AMOLED Display and Aluminum Body",
              sku: "AP-7823",
              current_price: 40.00,
              min_price: 35.50,
              torob_link:
                "https://image.torob.com/base/images/QC/a7/QCa7Q_nFQX0gpWNj.webp_/560x560.avif",
              is_active: true,
              average_rank: 3.5,
              image:
                "https://image.torob.com/base/images/QC/a7/QCa7Q_nFQX0gpWNj.webp_/560x560.avif",
            },
            {
              id: 9,
              title: "ZQS 1202 Bluetooth Speaker",
              sku: "AP-5929",
              current_price: 38.26,
              min_price: 25.00,
              torob_link:
                "https://image.torob.com/base/images/_v/Wg/_vWgBGHh-eN4gmA4.jpg_/560x560.avif",
              is_active: true,
              average_rank: 25.2,
              image:
                "https://image.torob.com/base/images/_v/Wg/_vWgBGHh-eN4gmA4.jpg_/560x560.avif",
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
