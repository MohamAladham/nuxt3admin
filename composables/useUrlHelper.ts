export const queryBuilder = (data = {}): string => {    const route = useRoute();    let queryObj = {...route.query, ...data}    if (!queryObj) return ''    let query = '?';    Object.entries(queryObj).forEach((value, index) => {        if (value[1] !== null) {            query += index === 0 ? '' : '&';            query += `${value[0]}=${value[1]}`;        }    });    return query;}export const pushDataToRouter = (data) => {    const route = useRoute();    const router = useRouter();    let queryObj = {...route.query, ...data}    Object.entries(queryObj).forEach((value, index) => {        if (value[1] === null) {            delete queryObj[value[0]];        }    });    // update url    router.push({        path: route.path,        query: queryObj    });}