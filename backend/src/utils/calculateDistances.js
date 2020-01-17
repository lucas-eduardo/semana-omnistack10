function de2rad(deg) {
    return deg * (Math.PI / 180);
}

module.exports = function getDistanceFromLatLonInKm(centerCoordinates, pointCoordinates) {
    const radius = 6371;

    const {
        latitude: lat1,
        longitude: lon1
    } = centerCoordinates;
    const {
        latitude: lat2,
        longitude: lon2
    } = pointCoordinates;

    const dLat = de2rad(lat2 - lat1);
    const dLon = de2rad(lon2 - lon1);

    const a =
        Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(de2rad(lat1)) * Math.cos(de2rad(lat2)) *
        Math.sin(dLon / 2) * Math.sin(dLon / 2);

    const center = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const distance = radius * center;

    return distance;
}