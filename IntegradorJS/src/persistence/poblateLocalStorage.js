//para popular el sitio con 9 productos, 6 de cada categoría
export const poblateLocalStorage = () => {
    if(localStorage.getItem("products")) return;

    localStorage.setItem("products", JSON.stringify([
        //Hamburguesas
        {
            "id":"2024-10-18T23:07:07.458Z",
            "nombre":"Burguer 1",
            "img":"https://file.aiquickdraw.com/imgcompressed/img/compressed_a4a9adbac89df299b4efb6f104757c9b.webp",
            "precio":"7500",
            "categoria":"Hamburguesas"
        },{
            "id":"2024-10-16T15:47:11.960Z",
            "nombre":"Burguer 2",
            "img":"https://file.aiquickdraw.com/imgcompressed/img/compressed_a4a9adbac89df299b4efb6f104757c9b.webp",
            "precio":"10000",
            "categoria":"Hamburguesas"
        },{
            "id":"2024-10-17T14:36:40.888Z",
            "nombre":"Burguer 3",
            "img":"https://file.aiquickdraw.com/imgcompressed/img/compressed_a4a9adbac89df299b4efb6f104757c9b.webp",
            "precio":"6000",
            "categoria":"Hamburguesas"
        }, {
            "id":"2024-10-18T23:01:07.458Z",
            "nombre":"Burguer 1",
            "img":"https://file.aiquickdraw.com/imgcompressed/img/compressed_a4a9adbac89df299b4efb6f104757c9b.webp",
            "precio":"7500",
            "categoria":"Hamburguesas"
        },{
            "id":"2024-10-16T15:41:11.960Z",
            "nombre":"Burguer 2",
            "img":"https://file.aiquickdraw.com/imgcompressed/img/compressed_a4a9adbac89df299b4efb6f104757c9b.webp",
            "precio":"10000",
            "categoria":"Hamburguesas"
        },{
            "id":"2024-10-17T14:31:40.888Z",
            "nombre":"Burguer 3",
            "img":"https://file.aiquickdraw.com/imgcompressed/img/compressed_a4a9adbac89df299b4efb6f104757c9b.webp",
            "precio":"6000",
            "categoria":"Hamburguesas"
        },
        // Gaseosas
        {
            "id":"2024-10-17T14:55:31.346Z",
            "nombre":"Coca Cola",
            "img":"https://t4.ftcdn.net/jpg/02/84/65/61/360_F_284656117_sPF8gVWaX627bq5qKrlrvCz1eFfowdBf.jpg",
            "precio":"3000",
            "categoria":"Gaseosas"
        },{
            "id":"2024-10-17T14:57:35.085Z",
            "nombre":"Pepsi",
            "img":"https://www.pepsi.es/prod/s3fs-public/2024-07/Pepsi_Packshot_226x327px_04_6d9fb4abebfcd94632de221d82323aeb.png",
            "precio":"1500",
            "categoria":"Gaseosas"
        },{
            "id":"2024-10-17T14:58:42.540Z",
            "nombre":"Manaos",
            "img":"https://tienda.pasosonline.com.ar/wp-content/uploads/2024/02/MANAOS-soda-sifon-x2lt.png",
            "precio":"2000",
            "categoria":"Gaseosas"
        },{
            "id":"2024-10-17T14:15:31.346Z",
            "nombre":"Coca Cola",
            "img":"https://t4.ftcdn.net/jpg/02/84/65/61/360_F_284656117_sPF8gVWaX627bq5qKrlrvCz1eFfowdBf.jpg",
            "precio":"3000",
            "categoria":"Gaseosas"
        },{
            "id":"2024-10-17T14:17:35.085Z",
            "nombre":"Pepsi",
            "img":"https://www.pepsi.es/prod/s3fs-public/2024-07/Pepsi_Packshot_226x327px_04_6d9fb4abebfcd94632de221d82323aeb.png",
            "precio":"1500",
            "categoria":"Gaseosas"
        },{
            "id":"2024-10-17T14:18:42.540Z",
            "nombre":"Manaos",
            "img":"https://tienda.pasosonline.com.ar/wp-content/uploads/2024/02/MANAOS-soda-sifon-x2lt.png",
            "precio":"2000",
            "categoria":"Gaseosas"
        },
        //Papas
        {
            "id":"2024-10-17T15:02:24.030Z",
            "nombre":"Papas chicas",
            "img":"https://betos.com.ar/wp-content/uploads/2019/09/papas-fritas.png",
            "precio":"2000",
            "categoria":"Papas"
        },{
            "id":"2024-10-17T15:02:23.030Z",
            "nombre":"Papas medianas",
            "img":"https://betos.com.ar/wp-content/uploads/2019/09/papas-fritas.png",
            "precio":"4000",
            "categoria":"Papas"
        },{
            "id":"2024-10-17T15:02:22.030Z",
            "nombre":"Papas grandes",
            "img":"https://betos.com.ar/wp-content/uploads/2019/09/papas-fritas.png",
            "precio":"4000",
            "categoria":"Papas"
        }, {
            "id":"2024-10-17T15:02:21.030Z",
            "nombre":"Papas chicas",
            "img":"https://betos.com.ar/wp-content/uploads/2019/09/papas-fritas.png",
            "precio":"2000",
            "categoria":"Papas"
        },{
            "id":"2024-10-17T15:02:20.030Z",
            "nombre":"Papas medianas",
            "img":"https://betos.com.ar/wp-content/uploads/2019/09/papas-fritas.png",
            "precio":"4000",
            "categoria":"Papas"
        },{
            "id":"2024-10-17T15:02:19.030Z",
            "nombre":"Papas grandes",
            "img":"https://betos.com.ar/wp-content/uploads/2019/09/papas-fritas.png",
            "precio":"4000",
            "categoria":"Papas"
        } 
    ]));
};