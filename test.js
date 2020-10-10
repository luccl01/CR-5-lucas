var test = [3, 22, 7, 10, 8]


var movy = 

[{
	name : "Lord of the Rings <br>- The Fellowship of the Ring",
	description : "Am 111. Geburtstag seines Onkels Bilbo erbt der junge Hobbit Frodo einen magischen Ring. Doch mit dem Erbe erhält er auch eine große Verantwortung, denn der Ring entpuppt sich als der Eine Ring des bösen Zauberers Sauron, der ganz Mittelerde ins Verderben stürzen will. Der einzige Weg, den Ring zerstören",
    likes : 2,
    IMDb : "8,8/10"
},{
	name : "Lord of the Rings <br>- The two Towers",
	description : "Von ihren Gefährten getrennt machen sich Frodo und Sam auf den Weg nach Mordor, um den Ring zu vernichten. Dicht auf den Fersen ist den beiden Hobbits dabei Gollum. Ihre Freunde Merry und Pippin können den Orks entkommen und treffen im finsteren Fangornwald mächtige Verbündete",
    likes : 1,
    IMDb : "8,7/10"
},{
	name : "Lord of the Rings <br>- The Return of the King",
	description : "Aragorn muss einem letzten großen Angriff standhalten, und gleichzeitig muss Sauron vom Schicksalsberg abgelenkt werden, wo sich Frodo und Sam kurz vor der Erfüllung ihrer Mission befinden, den Einen Ring zu zerstören. Doch die Macht des Ringes hat schon längst Besitz von Frodo ergriffen.",
    likes : 15,
    IMDb : "8,9/10"
},{
	name : "The Hobbit 1",
    "description" : "Der Hobbit Bilbo Beutlin wird vom Zauberer Gandalf auf ein großes Abenteuer geschickt, denn er soll den Zwergen helfen, ihren Schatz zurückzubekommen. Die Kostbarkeiten liegen auf einem Berg, bewacht von einem Drachen in einem Gebiet, das ursprünglich den Zwergen gehörte.",
    likes : 28,
    IMDb : "7,8/10"
},{
	"name" : "The Hobbbit 2",
	"description" : "Der Hobbit Bilbo und die Zwerge setzen ihre Reise zum Berg Erebor fort, um die einstige Heimat der Zwerge aus der Gewalt des Drachens Smaug zu befreien. Unterwegs machen ihnen üble Orks und gefräßige Riesenspinnen zu schaffen und dann geraten die Reisenden auch noch in die Gefangenschaft von Waldelben",
    likes : 14,
    "IMDb" : "7,8/10"
},{
	"name" : "The Hobbit 3",
	"description" : "Bilbo Beutlin, Thorin Eichenschild und die Gemeinschaft der Zwerge sind am Ende ihres Abenteuers angelangt. Die Zwerge von Erebor haben die Schätze ihres Heimatlandes zurückgefordert, müssen aber die Konsequenzen dafür tragen, dass sie den furchterregenden Drachen Smaug geweckt haben.",
    likes : 3,
    "IMDb" : "7,4/10"
}];

// for (i =0; i < test.length; i++ )
// for (const i in test)
// {
//     if (i <= i+1){test.splice(i, 1) 
//     test.splice ( test.length, 0, test[i].value)} 
//     console.log (test)
// }

// console.log(test[1].value)

for (i=0; i < movy.length ; i++){
    // movy[i].likes.sort((a, b) => a - b)
    let result = new Array(movy.length)
    const sorting = new Array(movy.length)
    sortingg = []
    sortingg += sorting.fill(movy[i].likes, i, i+1)
    
    // sorting.push(movy[i].likes) 
    // console.log (sorting)
    // result.sort((a, b) => a - b)
    // sorting += sorting[i]
    // console.log (sortingg)
    // console.log (result)
    // console.log(result)
    // console.log (sorting)
    // sorting.sort((a, b) => a - b)
    // console.log (sorting)
}
// console.log (movy[0].likes)
test.sort((a, b) => a - b)
// console.log (test)


for (const i in movy){
let filledArray = new Array()
filledArray = (new Array(i).fill(`${movy[0].likes} , ${movy[1].likes}, ${movy[2].likes} , ${movy[3].likes} , ${movy[4].likes} ,${movy[5].likes} `)) + (new Array(i).fill(`${movy[1].likes}`)) ;
// filledArray.sort((a, b) => a - b)
console.log (filledArray)
}

