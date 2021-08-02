function randomize() {

	var value = genre.options[genre.selectedIndex].value;
	var Shonen = new Array();
	var Comedy = new Array();
	var Horror = new Array();
	var Romance = new Array();


	Shonen[0] = "https://static.wikia.nocookie.net/dubbing9585/images/3/39/Naruto2.jpg/revision/latest?cb=20191022002833";
	Shonen[1] = "https://i.pinimg.com/originals/95/1f/ac/951facb2f2c96b599b7519e2b8da743e.jpg";
	Shonen[2] = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQD1-j_CVQReTSFnAf4A_PVwFVrLVDdD0o5Hm3e_LdeBFjXxeFW";
	Shonen[3] = "https://m.media-amazon.com/images/M/MV5BMGMyOThiMGUtYmFmZi00YWM0LWJiM2QtZGMwM2Q2ODE4MzhhXkEyXkFqcGdeQXVyMjc2Nzg5OTQ@._V1_.jpg";
	Shonen[4] = "https://d.ecumenicalnews.com/full/21635/630-0/dragon-ball-super.jpg";
	Shonen[5] = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQql4NR5_4ZYc3cRViUyENp0ZjCmj0v5NhIorSP9aRgRj1rnKcb";
	Shonen[6] = "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcR3SQW2EgSQetVX91m--X_v1pJEt4eYcluckSO0p3kzCMmf5yKq";
	Shonen[7] = "https://m.media-amazon.com/images/M/MV5BN2UwOTMwMjMtZTE5MS00YmY4LTg4YjAtZDE3ZTg3YTU5MmQ2XkEyXkFqcGdeQXVyODEyMDIxNDY@._V1_.jpg";
	Shonen[8] = "https://m.media-amazon.com/images/M/MV5BNzQyYzU3Y2MtOWY2Yy00ZGM2LTg3ZTUtMDJkZTJiMmEzMjYxXkEyXkFqcGdeQXVyMTI2NTY3NDg5._V1_.jpg";
	Shonen[9] = "https://static.wikia.nocookie.net/fma/images/e/e9/Fmab-poster.png/revision/latest?cb=20131124145205";
	Shonen[10] = "https://m.media-amazon.com/images/M/MV5BNTdiNTJmMzktZmE2MC00OWUxLWE1MjktMTdhN2Q1OWNlODY1L2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_.jpg";
	Shonen[11] = "https://m.media-amazon.com/images/M/MV5BZDc3NGQ3ZWQtYjNkOC00MjhiLTg2N2YtNmZlOGNiZTFkOWNhXkEyXkFqcGdeQXVyNjc2NjA5MTU@._V1_QL75_UY281_CR4,0,190,281_.jpg";
	Shonen[12] = "https://m.media-amazon.com/images/M/MV5BOWNhMDMyMDYtNzJlOS00YzhhLWFiMjktYWY1MzMzZGZhOGRjXkEyXkFqcGdeQXVyNDYzNTI2ODc@._V1_.jpg";
	Shonen[13] = "https://m.media-amazon.com/images/M/MV5BOTI4YWNlNzMtNWU3Yi00OTBmLWEyOTYtZjAyYTM5NWZkMWM4XkEyXkFqcGdeQXVyMTI2NTY3NDg5._V1_.jpg";
	Shonen[14] = "https://m.media-amazon.com/images/M/MV5BNmQzYmE2MGEtZjk4YS00YmVjLWEwZWMtODRkMjc4MTM5N2I3XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_.jpg";
	Shonen[15] = "https://m.media-amazon.com/images/M/MV5BMTNmZDE2NDEtNTg3MS00OTE1LThlZGUtOGZkZTg0NTUyNGVmXkEyXkFqcGdeQXVyNTgyNTA4MjM@._V1_.jpg";
	Shonen[16] = "https://m.media-amazon.com/images/M/MV5BZjZjNzI5MDctY2Y4YS00NmM4LTljMmItZTFkOTExNGI3ODRhXkEyXkFqcGdeQXVyNjc3MjQzNTI@._V1_.jpg";
	Shonen[17] = "https://m.media-amazon.com/images/M/MV5BMjY1MjU5MjQtZWFiNi00MjE0LTk1ZTktY2RhNzc1OWQ1M2FjXkEyXkFqcGdeQXVyNTk5NTQ1NzM@._V1_FMjpg_UX1000_.jpg";
	Shonen[18]= "https://img2.hulu.com/user/v3/artwork/e6f09891-7847-42f5-91eb-1bc17fe8dc5b?base_image_bucket_name=image_manager&base_image=94db3df1-3452-4e13-8288-d89098f3ce85&size=458x687&format=jpeg";
	Shonen[19] = "https://img4.hulu.com/user/v3/artwork/a5de81c7-1f90-4b73-8d13-86f1862fbe50?base_image_bucket_name=image_manager&base_image=97977c76-80df-4f0e-989d-b9988acbf4d1&size=458x687&format=jpeg";
	Shonen[20] = "https://m.media-amazon.com/images/M/MV5BZmE1NjIyNjYtMTVmMy00M2YyLTljMjMtZGQwYmUxOTU4NjRlXkEyXkFqcGdeQXVyNjc3OTE4Nzk@._V1_.jpg";

	Comedy[0] = "https://m.media-amazon.com/images/M/MV5BMDkxZTJjZTEtMDRjMy00Yzk1LWI5YjItMjIwYmVlYzhlZWZhXkEyXkFqcGdeQXVyNDQxNjcxNQ@@._V1_.jpg";
	Comedy[1] = "https://static.wikia.nocookie.net/konosuba/images/7/79/Konosuba_Movie.jpg/revision/latest?cb=20190412081022";
	Comedy[2] = "https://m.media-amazon.com/images/M/MV5BZmE1NjIyNjYtMTVmMy00M2YyLTljMjMtZGQwYmUxOTU4NjRlXkEyXkFqcGdeQXVyNjc3OTE4Nzk@._V1_.jpg";
	Comedy[3] = "https://img4.hulu.com/user/v3/artwork/54a25fcf-a472-4d40-9968-13e2957e5abf?base_image_bucket_name=image_manager&base_image=7cdcc7a0-eef0-48f3-9499-b9bbaf5977de&size=458x687&format=jpeg";
	Comedy[4] = "https://m.media-amazon.com/images/M/MV5BODcwNWE3OTMtMDc3MS00NDFjLWE1OTAtNDU3NjgxODMxY2UyXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_.jpg";
	Comedy[5] = "https://m.media-amazon.com/images/M/MV5BNTdiNTJmMzktZmE2MC00OWUxLWE1MjktMTdhN2Q1OWNlODY1L2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_.jpg";
	Comedy[6] = "https://m.media-amazon.com/images/M/MV5BNWEwMjE2MjQtZTQ3NC00OTUxLWEwMWUtMThjZjg4Zjc5ZDYwXkEyXkFqcGdeQXVyMzgxODM4NjM@._V1_.jpg";
	Comedy[8] = "https://m.media-amazon.com/images/M/MV5BYjhlYWI2MGUtNjk4ZS00OWJjLWJiZTEtYWYxNTY5MzVhYzI0XkEyXkFqcGdeQXVyNDgyODgxNjE@._V1_.jpg";
	Comedy[9] = "https://cdn.shopify.com/s/files/1/0011/9416/4288/products/say-cheese-original-1.jpg?v=1569264233";
	Comedy[10] = "https://m.media-amazon.com/images/M/MV5BMTlkNzg4NzktNjgxZC00ZjUwLWFjOGYtNmJkMzY4Y2U4NzNkL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNjM1ODczNDE@._V1_.jpg";
	Comedy[11] = "https://m.media-amazon.com/images/M/MV5BNmQzYmE2MGEtZjk4YS00YmVjLWEwZWMtODRkMjc4MTM5N2I3XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_.jpg";
	Comedy[12] = "https://m.media-amazon.com/images/I/71RHDP8Qz5L._SL1075_.jpg";

	Romance[0] = "https://m.media-amazon.com/images/M/MV5BNGYyNmI3M2YtNzYzZS00OTViLTkxYjAtZDIyZmE1Y2U1ZmQ2XkEyXkFqcGdeQXVyMTA4NjE0NjEy._V1_.jpg";
	Romance[1] = "https://m.media-amazon.com/images/M/MV5BYThlNWY5ZDgtYTIxNC00ZjdiLWJmNGUtMDFjMDlmZTAzOWFiXkEyXkFqcGdeQXVyNTM4NzAzNjc@._V1_.jpg";
	Romance[2] = "https://static.wikia.nocookie.net/darling-in-the-franxx/images/2/27/Kv04.jpg/revision/latest?cb=20171209072941";
	Romance[3] = "https://m.media-amazon.com/images/M/MV5BOGJlZjU5YTAtYjkxMS00YWVhLWFjM2MtNDY3YTc2ZjJhMjM4L2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNjc2NjA5MTU@._V1_UY1200_CR85,0,630,1200_AL_.jpg";
	Romance[4] = "https://m.media-amazon.com/images/M/MV5BOTkzZjZiOWItZGM5Ny00N2IxLTg4ZTQtYTBiODhlNmRlM2IxXkEyXkFqcGdeQXVyMzgxODM4NjM@._V1_.jpg";
	Romance[5] = "https://m.media-amazon.com/images/I/91Efxb1l6SL._SL1500_.jpg";
	Romance[6] = "https://static.wikia.nocookie.net/guiltycrown/images/f/fb/Guilty_Crown_poster.jpg/revision/latest?cb=20111117204635";
	Romance[7] = "https://m.media-amazon.com/images/M/MV5BNWJkYzM4MWQtZWE2Mi00NmJkLTg5ZmUtNzNlMGYzOWYwYzE4XkEyXkFqcGdeQXVyNzQzNzQxNzI@._V1_UY1200_CR91,0,630,1200_AL_.jpg";
	Romance[8] = "https://d2y6mqrpjbqoe6.cloudfront.net/image/upload/f_auto,q_auto/media/library-400/216_636967475462893870Ao_Buta_Small_hq.jpg";
	Romance[9] = "https://m.media-amazon.com/images/M/MV5BNDI5ODBhYzMtNDc4Yi00NjEwLWJiZWUtMGE2Mzc4MGVjN2E0XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg";
	Romance[10] = "https://m.media-amazon.com/images/M/MV5BNWEwMjE2MjQtZTQ3NC00OTUxLWEwMWUtMThjZjg4Zjc5ZDYwXkEyXkFqcGdeQXVyMzgxODM4NjM@._V1_.jpg";
	Romance[11] = "https://m.media-amazon.com/images/M/MV5BNzAwZDlmMjctMzkwMC00Y2U3LTlmOGUtNGY2MTc5MzFhZjk0XkEyXkFqcGdeQXVyNjc3MjQzNTI@._V1_.jpg";
	Romance[12] = "https://m.media-amazon.com/images/M/MV5BNjhhMWZkYzItZWZiMy00MjdlLWIxNjQtZGFlMGQ4YzVmNTAyL2ltYWdlXkEyXkFqcGdeQXVyMzgxODM4NjM@._V1_.jpg";

	Horror[0] = "https://m.media-amazon.com/images/M/MV5BN2E2OTgzODktMjBhYy00MjJjLWI0OTgtNGYxOGNhMWMxOWE4XkEyXkFqcGdeQXVyMzgxODM4NjM@._V1_.jpg";
	Horror[1] = "https://m.media-amazon.com/images/M/MV5BODQxMjY0MjItZjQ0MS00NmRiLWI2ZjQtMjYyNmQ3MTFjOGEzXkEyXkFqcGdeQXVyMjc4OTQ1OTA@._V1_.jpg";
	Horror[2] = "https://m.media-amazon.com/images/M/MV5BZTViMTZlMjgtNjVmZC00NjEzLWJlN2QtMjQ4ZTYxNzBiZmMyXkEyXkFqcGdeQXVyNjc2NjA5MTU@._V1_FMjpg_UX1000_.jpg";
	Horror[3] = "https://m.media-amazon.com/images/M/MV5BMTYwYjYyZDgtMTQ3My00YTI4LThmZTUtZmU1MjllOWRlOTdhXkEyXkFqcGdeQXVyMzgxODM4NjM@._V1_.jpg";
	Horror[4] = "https://m.media-amazon.com/images/M/MV5BMTYwYjYyZDgtMTQ3My00YTI4LThmZTUtZmU1MjllOWRlOTdhXkEyXkFqcGdeQXVyMzgxODM4NjM@._V1_.jpg";
	Horror[5] = "https://upload.wikimedia.org/wikipedia/en/4/4c/Another_series_cover.jpg";
	Horror[6] = "https://m.media-amazon.com/images/M/MV5BNWExOTUxYjQtYmNhOS00OGViLWI3N2ItMzBhMWY5NGJkYjlmXkEyXkFqcGdeQXVyNDgyODgxNjE@._V1_.jpg";
	Horror[7] = "https://img2.hulu.com/user/v3/artwork/7d231805-e41a-4522-a26d-e3fe99c52e9a?base_image_bucket_name=image_manager&base_image=730956ee-9977-49a3-9648-455b9041f43e&size=458x687&format=jpeg";
	Horror[8] = "https://m.media-amazon.com/images/M/MV5BMzZkOGE4OTItM2RlZi00ZGM5LTlhMDAtZWQxOTlhYTM5NmZkXkEyXkFqcGdeQXVyMTI2OTMwNDcw._V1_FMjpg_UX1000_.jpg";
	Horror[9] = "https://m.media-amazon.com/images/M/MV5BM2ZiZTk1ODgtMTZkNS00NTYxLWIxZTUtNWExZGYwZTRjODViXkEyXkFqcGdeQXVyMTE2MzA3MDM@._V1_FMjpg_UX1000_.jpg";
	Horror[10] = "https://m.media-amazon.com/images/M/MV5BN2RkMjQ3ZjItNWNlMC00ZTZlLTg3OTQtMzJjYjMwOTQ1ODg4XkEyXkFqcGdeQXVyMDc2NTEzMw@@._V1_.jpg";
	Horror[11] = "https://m.media-amazon.com/images/M/MV5BMjQzNjA3NGQtMzRiNi00OGIyLWJiZjYtZWZmNTJhNDE5YzI5L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_.jpg";
	Horror[12] = "https://m.media-amazon.com/images/M/MV5BZWZlN2RlZDMtOGJhOC00ZmY2LThjMWMtMGI1MzI1ZTlhMzk4XkEyXkFqcGdeQXVyMzgxODM4NjM@._V1_.jpg";
	Horror[13] = "https://m.media-amazon.com/images/I/71RHDP8Qz5L._SL1075_.jpg";

	var RandomShonen= Math.floor(Math.random()*Shonen.length);
	var RandomComedy= Math.floor(Math.random()*Comedy.length);
	var RandomHorror= Math.floor(Math.random()*Horror.length);
	var RandomRomance= Math.floor(Math.random()*Romance.length);

	if(value=="shonen"){
		return document.getElementById("result").innerHTML = '<img src="'+Shonen[RandomShonen]+'" />';  
	}
	else if (value=="comedy"){
		return document.getElementById("result").innerHTML = '<img src="'+Comedy[RandomComedy]+'" />';	
	}
	else if (value=="horror"){
		return document.getElementById("result").innerHTML = '<img src="'+Horror[RandomHorror]+'" />';
	}
	else if(value=="romance"){
		return document.getElementById("result").innerHTML = '<img src="'+Romance[RandomRomance]+'" />';
	}

}