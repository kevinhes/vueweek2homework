const url = 'https://vue3-course-api.hexschool.io/'; 
const path = 'kevinhes-apistudy'; 
const usernameInput = document.querySelector('#username')
const passwordInput = document.querySelector('#password')
const loginbtn = document.querySelector('.btn')



function login(){
    const username = usernameInput.value;
    const password = passwordInput.value;
    const user = {username,password}
    axios.post(`${url}admin/signin`,user)
    .then((res) => {
        if(res.data.success){
            const token = res.data.token;
            const expired = res.data.expired;
            document.cookie = `hexToken=${token}; expires=${new Date(expired)}`;
            window.location = 'product/product.html'
        }else{
            alert(res.data.message)
        }
    })
}

loginbtn.addEventListener('click',login)