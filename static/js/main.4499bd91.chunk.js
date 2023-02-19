(this["webpackJsonpreact_movies-list-add-form"]=this["webpackJsonpreact_movies-list-add-form"]||[]).push([[0],{15:function(e,t,i){},16:function(e,t,i){},17:function(e,t,i){},19:function(e,t,i){"use strict";i.r(t);var a=i(6),c=i.n(a),s=(i(14),i(9)),n=i(2),l=(i(15),i(1)),r=(i(16),i(17),i(0)),d=function(e){var t=e.movie;return Object(r.jsxs)("div",{className:"card","data-cy":"movie-card",children:[Object(r.jsx)("div",{className:"card-image",children:Object(r.jsx)("figure",{className:"image is-4by3",children:Object(r.jsx)("img",{src:t.imgUrl,alt:"Film logo"})})}),Object(r.jsxs)("div",{className:"card-content",children:[Object(r.jsxs)("div",{className:"media",children:[Object(r.jsx)("div",{className:"media-left",children:Object(r.jsx)("figure",{className:"image is-48x48",children:Object(r.jsx)("img",{src:"images/imdb-logo.jpeg",alt:"imdb"})})}),Object(r.jsx)("div",{className:"media-content",children:Object(r.jsx)("p",{className:"title is-8",children:t.title})})]}),Object(r.jsxs)("div",{className:"content",children:[t.description,Object(r.jsx)("br",{}),Object(r.jsx)("a",{href:t.imdbUrl,children:"IMDB"})]})]})]})},o=function(e){var t=e.movies;return Object(r.jsx)("div",{className:"movies",children:t.map((function(e){return Object(r.jsx)(d,{movie:e},e.imdbId)}))})},m=i(7),b=i.n(m);var j=function(e){var t=e.name,i=e.value,a=e.label,c=void 0===a?t:a,s=e.required,d=void 0!==s&&s,o=e.validUrl,m=e.validimdbUrl,j=e.setValidUrl,h=e.setValidimdbUrl,u=e.onChange,O=void 0===u?function(){}:u,g=Object(l.useState)((function(){return"".concat(t,"-").concat(Math.random().toString().slice(2))})),v=Object(n.a)(g,1)[0],p=Object(l.useState)(!1),w=Object(n.a)(p,2),x=w[0],f=w[1],M=x&&d&&!i,N=/^((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=+$,\w]+@)?[A-Za-z0-9.-]+|(?:www\.|[-;:&=+$,\w]+@)[A-Za-z0-9.-]+)((?:\/[+~%/.\w-_]*)?\??(?:[-+=&;%@,.\w_]*)#?(?:[,.!/\\\w]*))?)$/,U=Object(l.useMemo)((function(){return"imgUrl"===t||"imdbUrl"===t?o||m:M}),[o,m,M]);return Object(r.jsxs)("div",{className:"field",children:[Object(r.jsx)("label",{className:"label",htmlFor:v,children:c}),Object(r.jsx)("div",{className:"control",children:Object(r.jsx)("input",{id:v,"data-cy":"movie-".concat(t),className:b()("input",{"is-danger":U}),type:"text",placeholder:"Enter ".concat(c),value:i,onChange:function(e){j&&j(!1),h&&h(!1),O(e.target.value)},onBlur:function(){!i.match(N)&&j&&j(!0),!i.match(N)&&h&&h(!0),f(!0)}})}),U&&Object(r.jsx)("p",{className:"help is-danger",children:"".concat(c," is required")})]})},h=function(e){var t=e.onAdd,i=Object(l.useState)(0),a=Object(n.a)(i,2),c=a[0],s=a[1],d=Object(l.useState)(""),o=Object(n.a)(d,2),m=o[0],b=o[1],h=Object(l.useState)(""),u=Object(n.a)(h,2),O=u[0],g=u[1],v=Object(l.useState)(""),p=Object(n.a)(v,2),w=p[0],x=p[1],f=Object(l.useState)(""),M=Object(n.a)(f,2),N=M[0],U=M[1],y=Object(l.useState)(""),I=Object(n.a)(y,2),T=I[0],B=I[1],S=Object(l.useState)(!1),_=Object(n.a)(S,2),k=_[0],z=_[1],A=Object(l.useState)(!1),V=Object(n.a)(A,2),D=V[0],C=V[1];return Object(r.jsxs)("form",{className:"NewMovie",onSubmit:function(e){e.preventDefault(),t({title:O,description:m,imgUrl:w,imdbUrl:N,imdbId:T}),b(""),g(""),x(""),U(""),B(""),s(c+1)},children:[Object(r.jsx)("h2",{className:"title",children:"Add a movie"}),Object(r.jsx)(j,{name:"title",label:"Title",value:O,onChange:g,required:!0}),Object(r.jsx)(j,{name:"description",label:"Description",value:m,onChange:b}),Object(r.jsx)(j,{name:"imgUrl",label:"Image URL",value:w,onChange:x,required:!0,validUrl:k,setValidUrl:z}),Object(r.jsx)(j,{name:"imdbUrl",label:"Imdb URL",value:N,onChange:U,required:!0,validimdbUrl:D,setValidimdbUrl:C}),Object(r.jsx)(j,{name:"imdbId",label:"Imdb ID",value:T,onChange:B}),Object(r.jsx)("div",{className:"field is-grouped",children:Object(r.jsx)("div",{className:"control",children:Object(r.jsx)("button",{type:"submit","data-cy":"submit-button",className:"button is-link",disabled:!O||!w||!N||!T||D||k,children:"Add"})})})]},c)},u=i(8),O=function(){var e=Object(l.useState)(u),t=Object(n.a)(e,2),i=t[0],a=t[1];return Object(r.jsxs)("div",{className:"page",children:[Object(r.jsx)("div",{className:"page-content",children:Object(r.jsx)(o,{movies:i})}),Object(r.jsx)("div",{className:"sidebar",children:Object(r.jsx)(h,{onAdd:function(e){a([].concat(Object(s.a)(i),[e]))}})})]})};c.a.render(Object(r.jsx)(O,{}),document.getElementById("root"))},8:function(e){e.exports=JSON.parse('[{"title":"Inception","description":"Follows the lives of eight very different couples in dealing with their love lives in various loosely interrelated tales all set during a frantic month before Christmas in London, England.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg","imdbUrl":"https://www.imdb.com/title/tt1375666","imdbId":"tt1375666"},{"title":"Love Actually","description":"A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMTY4NjQ5NDc0Nl5BMl5BanBnXkFtZTYwNjk5NDM3._V1_.jpg","imdbUrl":"https://www.imdb.com/title/tt0314331","imdbId":"tt0314331"},{"title":"The Day After Tomorrow","description":"Jack Hall, paleoclimatologist, must make a daring trek from Washington, D.C. to New York City to reach his son, trapped in the cross-hairs of a sudden international storm which plunges the planet into a new Ice Age.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMTY4YWMzMTMtZjUyOS00OGY1LTljMGUtOWU5ZjYzMjc2ZTMwXkEyXkFqcGdeQXVyMTYzMDM0NTU@._V1_SY1000_CR0,0,701,1000_AL_.jpg","imdbUrl":"https://www.imdb.com/title/tt0319262","imdbId":"tt0319262"},{"title":"Rogue One","description":"The daughter of an Imperial scientist joins the Rebel Alliance in a risky move to steal the Death Star plans.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMjEwMzMxODIzOV5BMl5BanBnXkFtZTgwNzg3OTAzMDI@._V1_SY1000_SX675_AL_.jpg","imdbUrl":"https://www.imdb.com/title/tt3748528","imdbId":"tt3748528"},{"title":"The Holiday","description":"Two women troubled with guy-problems swap homes in each other\'s countries, where they each meet a local guy and fall in love.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMTI1MDk4MzA2OF5BMl5BanBnXkFtZTYwMjQ3NDc3._V1_.jpg","imdbUrl":"https://www.imdb.com/title/tt0457939","imdbId":"tt0457939"}]')}},[[19,1,2]]]);
//# sourceMappingURL=main.4499bd91.chunk.js.map