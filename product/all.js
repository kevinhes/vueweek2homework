const app = {
    data:{
    url :'https://vue3-course-api.hexschool.io/',
    path :'kevinhes-apistudy',
    productsData:[],
    },
    getProductList(){
        axios.get(`${this.data.url}api/${this.data.path}/admin/products?page=:page`)
        .then((res) => {
            this.data.productsData = res.data.products
            this.render()
        })
    },
    // removeProducts(e){
    //     const id = e.target.dataset.id
    //     axios.delete(`${this.data.url}api/${this.data.path}/admin/product/${id}`)
    //     .then((res)=>{
    //         app.render()
    //     })
    // },
    // const deleteBtn = document.querySelectorAll('.deleteBtn')
    //     deleteBtn.forEach((btn) => {
    //         btn.addEventListener('click',this.removeProducts)
    //     })
    //     removeProducts(evt)
    //     {    const id = evt.target.dataset.id
    //         axios.delete(`${this.data.url}api/${thes.data.path}/admin/product/${id}`)}
    init(){
        const token = document.cookie.replace(/(?:(?:^|.*;\s*)hexToken\s*\=\s*([^;]*).*$)|^.*$/, "$1");
        axios.defaults.headers.common['Authorization'] = token
        axios.post(`${this.data.url}api/user/check`)
        .then((res) =>{
            console.log(res);  
        });
        this.getProductList()
    },
    render(){
        const productList = document.querySelector('#productList')
        const productCount = document.querySelector('#productCount')
        let str = '';
        this.data.productsData.forEach((item,index) => {
            str += `<tr>
            <td>${item.title}</td>
            <td width="120">
              ${item.origin_price}
            </td>
            <td width="120">
                ${item.price}
            </td>
            <td width="100">
                <div class="form-check form-switch">
                    <input class="form-check-input" type="checkbox" id="${item.id}" ${item.is_enabled? 'checked': ''} data-action="status" data-id="${item.id}">
                    <label class="form-check-label" data-action="status" for="${item.id}">${item.is_enabled? '啟用' : '未啟用'}</label>
                </div>
            </td>
            <td width="120">
              <button type="button" class="btn btn-sm btn-outline-danger move deleteBtn" data-action="remove" data-id=${item.id}"> 刪除 </button>
            </td>
          </tr>
          `
        })
        productList.innerHTML = str
        productCount.textContent = this.data.length

        // const deleteBtn = document.querySelectorAll('.deleteBtn')
        // deleteBtn.forEach((btn) => {
        //             btn.addEventListener('click',this.removeProducts)
        //         })
    },
}

app.init()


