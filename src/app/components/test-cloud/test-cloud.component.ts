import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-test-cloud',
  templateUrl: './test-cloud.component.html',
  styleUrls: ['./test-cloud.component.sass']
})
export class TestCloudComponent implements OnInit {
  testArray=['a',',b','c'];
  title = 'Test Coud Fire Store';
  Cities: Observable<any[]>;
  books: Observable<unknown[]>;
  constructor(firestore_db: AngularFirestore) {
    this.books = firestore_db.collection('books').valueChanges();

    this.Cities = firestore_db.collection('cities',ref=>ref.where('name','==', 'Beijing')).valueChanges();
    
    const city = firestore_db.collection('books'
    // ,ref=>ref
    // .where('name','==', 'Beijing')
    ).doc('Y04flFdjNg3iAFnd7nWC').collection('authors')
    .get();
    
    const dtaa=city.subscribe(s=>{
      // console.log(s.docs)
      
      s.forEach(o=>{
        console.log(o.data())
        
      })
    })

    this.Cities.subscribe(s=>{

      console.log('s',s)
    })

    let docRef = firestore_db.collection("cities").doc("SF");

    docRef.get().forEach((doc) => {
      if (doc.exists) {
        console.log("Document data:", doc.data());
      } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
      }
    }).catch(function (error) {
      console.log("Error getting document:", error);
    });

    //  const t = firestore.collection('books').get().forEach(f=>{f});
    // const r= this.items[0]

    firestore_db.collection("users2").add({
      first: "Ada",
      last: "Lovelace",
      born: 1815,
      contactDetails:{cell:1234567890,email:'ada@abc.com'}
  })
                    

    // var citiesRef = firestore_db.collection("cities");

    // citiesRef.doc("SF").set({
    //     name: "San Francisco", state: "CA", country: "USA",
    //     capital: false, population: 860000,
    //     regions: ["west_coast", "norcal"] });
    // citiesRef.doc("LA").set({
    //     name: "Los Angeles", state: "CA", country: "USA",
    //     capital: false, population: 3900000,
    //     regions: ["west_coast", "socal"] });
    // citiesRef.doc("DC").set({
    //     name: "Washington, D.C.", state: null, country: "USA",
    //     capital: true, population: 680000,
    //     regions: ["east_coast"] });
    // citiesRef.doc("TOK").set({
    //     name: "Tokyo", state: null, country: "Japan",
    //     capital: true, population: 9000000,
    //     regions: ["kanto", "honshu"] });
    // citiesRef.doc("BJ").set({
    //     name: "Beijing", state: null, country: "China",
    //     capital: true, population: 21500000,
    //     regions: ["jingjinji", "hebei"] });
    //  console.log(t);
  }

  ngOnInit(): void {
  }

}
