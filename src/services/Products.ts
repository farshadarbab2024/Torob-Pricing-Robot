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
              title: "Gionee S11 Lite Mobile Phone, Dual SIM, 64GB Storage, 4GB RAM",
              sku: "AP-7019",
              current_price: 201.26,
              min_price: 195.00,
              torob_link:
                "https://dkstatics-public.digikala.com/digikala-products/d2b23b5c039639a500ef116780d671760f7c63c4_1733323521.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/format,webp/quality,q_90",
              is_active: true,
              average_rank: 1.5,
              image:
                "https://dkstatics-public.digikala.com/digikala-products/d2b23b5c039639a500ef116780d671760f7c63c4_1733323521.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/format,webp/quality,q_90",
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
              title: "Xiaomi Poco C75 Mobile Phone, Dual SIM, 256GB Storage, 8GB RAM",
              sku: "AP-9820",
              current_price: 196.26,
              min_price: 186.0,
              torob_link:
                "https://dkstatics-public.digikala.com/digikala-products/a422b641df82192fb7ef3699fd27d510695f6373_1737873889.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/format,webp/quality,q_90",
              is_active: true,
              average_rank: 3.6,
              image:
                "https://dkstatics-public.digikala.com/digikala-products/a422b641df82192fb7ef3699fd27d510695f6373_1737873889.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/format,webp/quality,q_90",
            },
            {
              id: 6,
              title: "Xiaomi Redmi Note 13 Pro 5G, Dual SIM, 512GB, 12GB RAM",
              sku: "AP-2629",
              current_price: 345.26,
              min_price: 330.0,
              torob_link:
                "https://dkstatics-public.digikala.com/digikala-products/9285ca4c7ae4a67babb13574b008d4858b85d59d_1726055404.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/format,webp/quality,q_90",
              is_active: true,
              average_rank: 2.0,
              image:
                "https://dkstatics-public.digikala.com/digikala-products/9285ca4c7ae4a67babb13574b008d4858b85d59d_1726055404.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/format,webp/quality,q_90",
            },
          ],
        };

      case 3:
        return {
          has_more: true,
          products: [
            {
              id: 7,
              title: "Samsung Gear S2 Smartwatch with Rubber Strap",
              sku: "AP-7999",
              current_price: 200.05,
              min_price: 176.00,
              torob_link:
                "https://dkstatics-public.digikala.com/digikala-products/7d4f98b261c6d4915e1c49c094fd74d609d080f5_1739711253.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/format,webp/quality,q_90",
              is_active: true,
              average_rank: 1.3,
              image:
                "https://dkstatics-public.digikala.com/digikala-products/7d4f98b261c6d4915e1c49c094fd74d609d080f5_1739711253.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/format,webp/quality,q_90",
            },
            {
              id: 8,
              title: "Apple iPhone 17 Pro Max CH, Dual SIM, 256GB, 12GB RAM – Not Active",
              sku: "AP-3833",
              current_price: 640.00,
              min_price: 635.50,
              torob_link:
                "https://image.torob.com/base/images/QC/a7/QCa7Q_nFQX0gpWNj.webp_/560x560.avif",
              is_active: false,
              average_rank: 1.5,
              image:
                "https://dkstatics-public.digikala.com/digikala-products/002cb878b35fcc726c2375df7cf94ddbded2181a_1759666671.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/format,webp/quality,q_90",
            },
            {
              id: 9,
              title: "Samsung Galaxy A17 Mobile Phone, Dual SIM, 256GB, 8GB RAM – Vietnam",
              sku: "AP-1929",
              current_price: 368.26,
              min_price: 325.00,
              torob_link:
                "https://image.torob.com/base/images/_v/Wg/_vWgBGHh-eN4gmA4.jpg_/560x560.avif",
              is_active: true,
              average_rank: 5.2,
              image:
                "https://dkstatics-public.digikala.com/digikala-products/2d2fa294060d943cb075db5f52593464f5a02d2e_1759663231.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/format,webp/quality,q_90",
            },
          ],
        };
      case 4:
        return {
          has_more: true,
          products: [
            {
              id: 10,
              title: "Samsung Gear S2 Smartwatch with Rubber Strap",
              sku: "AP-7292",
              current_price: 310.26,
              min_price: 250.00,
              torob_link:
                "https://image.torob.com/base/images/qD/2O/qD2Ombc7BkYZyUpe.jpg_/560x560.avif",
              is_active: false,
              average_rank: 26.8,
              image:
                "https://image.torob.com/base/images/qD/2O/qD2Ombc7BkYZyUpe.jpg_/560x560.avif",
            },
            {
              id: 11,
              title: "Vertu Ivertu 5G Phone | 512GB Storage, 12GB RAM with Smart Ring",
              sku: "AP-7883",
              current_price: 260.00,
              min_price: 210.35,
              torob_link:
                "https://image.torob.com/base/images/CZ/HA/CZHA3lz-XVIrYTcG.webp_/560x560.avif",
              is_active: true,
              average_rank: 1.7,
              image:
                "https://image.torob.com/base/images/CZ/HA/CZHA3lz-XVIrYTcG.webp_/560x560.avif",
            },
            {
              id: 12,
              title: "Honor X5b Phone | 64GB Storage, 4GB RAM",
              sku: "AP-5929",
              current_price: 238.26,
              min_price: 225.00,
              torob_link:
                "https://image.torob.com/base/images/8F/Nk/8FNkysXWVZJTRrAt.webp_/560x560.avif",
              is_active: true,
              average_rank: 1.2,
              image:
                "https://image.torob.com/base/images/8F/Nk/8FNkysXWVZJTRrAt.webp_/560x560.avif",
            },
          ],
        };
      case 5:
        return {
          has_more: false,
          products: [
            {
              id: 13,
              title: "Xiaomi Poco C71 Mobile Phone, Dual SIM, 128GB Storage, 4GB RAM",
              sku: "AP-2092",
              current_price: 280.90,
              min_price: 256.00,
              torob_link:
                "https://dkstatics-public.digikala.com/digikala-products/935cb213b0d1c0982296c017df69d4df4b8401cb_1759669542.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/format,webp/quality,q_90",
              is_active: true,
              average_rank: 11.2,
              image:
                "https://dkstatics-public.digikala.com/digikala-products/935cb213b0d1c0982296c017df69d4df4b8401cb_1759669542.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/format,webp/quality,q_90",
            },
            {
              id: 14,
              title: "Xiaomi Redmi A3 Mobile Phone, Dual SIM, 128GB Storage, 4GB RAM",
              sku: "AP-7800",
              current_price: 260.00,
              min_price: 210.35,
              torob_link:
                "https://dkstatics-public.digikala.com/digikala-products/d5ef6ea65e38b2e4e025eef7852a5f34bf914493_1726389410.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/format,webp/quality,q_90",
              is_active: true,
              average_rank: 1.0,
              image:
                "https://dkstatics-public.digikala.com/digikala-products/d5ef6ea65e38b2e4e025eef7852a5f34bf914493_1726389410.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/format,webp/quality,q_90",
            },
            {
              id: 15,
              title: "Xiaomi Redmi Note 14 Pro 4G Mobile Phone, Dual SIM, 256GB Storage, 8GB RAM",
              sku: "AP-3929",
              current_price: 288.26,
              min_price: 225.00,
              torob_link:
                "https://dkstatics-public.digikala.com/digikala-products/f342fb46a5160efe4698f4582d33e89850447363_1740843590.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/format,webp/quality,q_90",
              is_active: true,
              average_rank: 2.2,
              image:
                "https://dkstatics-public.digikala.com/digikala-products/f342fb46a5160efe4698f4582d33e89850447363_1740843590.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/format,webp/quality,q_90",
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
