
function get(obj, path, defaultValue = 0) {

    if (obj == null) {
        return defaultValue;
    }

    if (!path) return obj;

    let keys = path.split('.');

    let current = obj;

    for (let key of keys) {
        if (current == null) {
            return defaultValue
        }

        current = current[key]
    }

    return current == undefined ? defaultValue : current;
}

const obj = { a: { b: { c: 1 } } };

console.log(get(obj, 'a.b.c'));
console.log(get(obj, 'a.b.x', 'default'));
console.log(get(obj, 'a.b.c.d', null))

const obj2 = { a: { b: { c: 0 } } };
get(obj2, 'a.b.c', 10);

const obj3 = { a: { b: { c: false } } };
get(obj3, 'a.b.c', true);

const obj4 = { a: [{ b: 2 }] };
get(obj4, 'a.0.b');

const obj5 = { a: null };
get(obj5, 'a.b.c', 'fallback');

get(obj, '', 'default');
get(obj, ['a', 'b', 'c']);