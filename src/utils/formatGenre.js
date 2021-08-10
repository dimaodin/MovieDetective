export function formatGenre(genres){
    const formatGenre = []

    genres.map(genre__id => {
        if(genre__id == 28)
            formatGenre.push('פעולה');
        if(genre__id == 12)
            formatGenre.push('הרפתקאות');
        if(genre__id == 16)
            formatGenre.push('אנימציה');
        if(genre__id == 35)
            formatGenre.push('קומדיה');
        if(genre__id == 80)
            formatGenre.push('פשע');
        if(genre__id == 99)
            formatGenre.push('דוקומנטרי');
        if(genre__id == 18)
            formatGenre.push('דרמה');
        if(genre__id == 10751)
            formatGenre.push('משפחה');
        if(genre__id == 14)
            formatGenre.push('פנטזיה');
        if(genre__id == 36)
            formatGenre.push('היסטוריה');
        if(genre__id == 27)
            formatGenre.push('אימה');
        if(genre__id == 10402)
            formatGenre.push('מוזיקלי');
        if(genre__id == 9648)
            formatGenre.push('מסתורין');
        if(genre__id == 10749)
            formatGenre.push('רומנטיקה');
        if(genre__id == 878)
            formatGenre.push('מדע בדיוני');
        if(genre__id == 10770)
            formatGenre.push('סרטי טלוויזיה');
        if(genre__id == 53)
            formatGenre.push('מתח');
        if(genre__id == 10752)
            formatGenre.push('מלחמה');
        if(genre__id == 37)
            formatGenre.push('מערבי');
    })
    return formatGenre;
  }