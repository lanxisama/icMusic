

/**
 * @param {Array} music
 * @param {Array} poster
 * @param {Array} judges
 */

// 
module.exports = merge = function(music,poster,judges){
    let res = []
    let musicName = music.map(val=>val.url)
    // let poster = poster[0]
    let jugName = judges.map(val=>val.avatar)
    res = res.concat(musicName)
    res = res.concat(jugName)
    res = res.concat(poster[0])
    res = res.map(val=>{
        let split = val.split('/')
        let name = split[split.length-1]
        console.log(name)
        return name
    })
    return res
}


 
// let poster=
//     [ 'http://localhost:3000/uploads/0cd7d533fc63b3027f753f4edb5b8a76' ]
// let judges=
//     [ { name: '桜抄丶',
//         avatar:
//          'http://localhost:3000/uploads/1c4d9f103ebe5445ff3488761d13debc',
//         url: 'https://space.bilibili.com/4274932' } ]
// let  music=
//     [ { url:
//          'http://localhost:3000/uploads/b7c15c44a47f6cca2d28e6b678080b24',
//         name: 'Capsule - Hello.mp3' } ]
 

 