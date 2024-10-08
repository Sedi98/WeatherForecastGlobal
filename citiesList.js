const cityList = [
    { cityName: 'Baku', lat: 40.4, long: 49.7, country: 'Azerbaijan' },
    { cityName: 'Ganja', lat: 40.6879, long: 46.3606, country: 'Azerbaijan' },
    { cityName: 'Sumqayit', lat: 40.5897, long: 49.6686, country: 'Azerbaijan' },
    { cityName: 'Mingachevir', lat: 40.7648, long: 47.0591, country: 'Azerbaijan' },
    { cityName: 'Lankaran', lat: 38.754, long: 48.8502, country: 'Azerbaijan' },
    { cityName: 'Shirvan', lat: 39.9333, long: 48.9167, country: 'Azerbaijan' },
    { cityName: 'Nakhchivan', lat: 39.2089, long: 45.4122, country: 'Azerbaijan' },
    { cityName: 'Shaki', lat: 41.1919, long: 47.1706, country: 'Azerbaijan' },
    { cityName: 'Yevlakh', lat: 40.6186, long: 47.1503, country: 'Azerbaijan' },
    { cityName: 'Khirdalan', lat: 40.445, long: 49.8017, country: 'Azerbaijan' },
    { cityName: 'Astara', lat: 38.4571, long: 48.8722, country: 'Azerbaijan' },
    { cityName: 'Shusha', lat: 39.75, long: 46.75, country: 'Azerbaijan' },
    { cityName: 'Qabala', lat: 40.9819, long: 47.8453, country: 'Azerbaijan' },
    { cityName: 'Qazax', lat: 41.0925, long: 45.3656, country: 'Azerbaijan' },
    { cityName: 'Salyan', lat: 39.5964, long: 48.9844, country: 'Azerbaijan' },
    // Major world cities
    { cityName: 'New York', lat: 40.7128, long: -74.006, country: 'USA' },
    { cityName: 'Los Angeles', lat: 34.0522, long: -118.2437, country: 'USA' },
    { cityName: 'London', lat: 51.5074, long: -0.1278, country: 'UK' },
    { cityName: 'Paris', lat: 48.8566, long: 2.3522, country: 'France' },
    { cityName: 'Tokyo', lat: 35.6895, long: 139.6917, country: 'Japan' },
    { cityName: 'Beijing', lat: 39.9042, long: 116.4074, country: 'China' },
    { cityName: 'Sydney', lat: -33.8688, long: 151.2093, country: 'Australia' },
    { cityName: 'Moscow', lat: 55.7558, long: 37.6173, country: 'Russia' },
    { cityName: 'Rio de Janeiro', lat: -22.9068, long: -43.1729, country: 'Brazil' },
    { cityName: 'Cape Town', lat: -33.9249, long: 18.4241, country: 'South Africa' },
    { cityName: 'Dubai', lat: 25.276987, long: 55.296249, country: 'UAE' },
    { cityName: 'Mumbai', lat: 19.076, long: 72.8777, country: 'India' },
    { cityName: 'Toronto', lat: 43.65107, long: -79.347015, country: 'Canada' },
    { cityName: 'Buenos Aires', lat: -34.6037, long: -58.3816, country: 'Argentina' },
    { cityName: 'Cairo', lat: 30.0444, long: 31.2357, country: 'Egypt' },
    { cityName: 'Berlin', lat: 52.52, long: 13.405, country: 'Germany' },
    { cityName: 'Mexico City', lat: 19.4326, long: -99.1332, country: 'Mexico' },
    // Capital cities
    { cityName: 'Washington, D.C.', lat: 38.9072, long: -77.0369, country: 'USA' },
    { cityName: 'Ottawa', lat: 45.4215, long: -75.6972, country: 'Canada' },
    { cityName: 'Brasília', lat: -15.8267, long: -47.9218, country: 'Brazil' },
    { cityName: 'Canberra', lat: -35.2809, long: 149.1300, country: 'Australia' },
    { cityName: 'New Delhi', lat: 28.6139, long: 77.2090, country: 'India' },
    { cityName: 'Islamabad', lat: 33.6844, long: 73.0479, country: 'Pakistan' },
    { cityName: 'Kabul', lat: 34.5553, long: 69.2075, country: 'Afghanistan' },
    { cityName: 'Abu Dhabi', lat: 24.4539, long: 54.3773, country: 'UAE' },
    { cityName: 'Riyadh', lat: 24.7136, long: 46.6753, country: 'Saudi Arabia' },
    { cityName: 'Baghdad', lat: 33.3152, long: 44.3661, country: 'Iraq' },
    { cityName: 'Tehran', lat: 35.6892, long: 51.3890, country: 'Iran' },
    { cityName: 'Ankara', lat: 39.9334, long: 32.8597, country: 'Turkey' },
    { cityName: 'Athens', lat: 37.9838, long: 23.7275, country: 'Greece' },
    { cityName: 'Rome', lat: 41.9028, long: 12.4964, country: 'Italy' },
    { cityName: 'Madrid', lat: 40.4168, long: -3.7038, country: 'Spain' },
    { cityName: 'Lisbon', lat: 38.7223, long: -9.1393, country: 'Portugal' },
    { cityName: 'Amsterdam', lat: 52.3676, long: 4.9041, country: 'Netherlands' },
    { cityName: 'Brussels', lat: 50.8503, long: 4.3517, country: 'Belgium' },
    { cityName: 'Vienna', lat: 48.2082, long: 16.3738, country: 'Austria' },
    { cityName: 'Bern', lat: 46.9481, long: 7.4474, country: 'Switzerland' },
    { cityName: 'Stockholm', lat: 59.3293, long: 18.0686, country: 'Sweden' },
    { cityName: 'Oslo', lat: 59.9139, long: 10.7522, country: 'Norway' },
    { cityName: 'Copenhagen', lat: 55.6761, long: 12.5683, country: 'Denmark' },
    { cityName: 'Helsinki', lat: 60.1695, long: 24.9354, country: 'Finland' },
    { cityName: 'Reykjavik', lat: 64.1355, long: -21.8954, country: 'Iceland' },
    { cityName: 'Dublin', lat: 53.3498, long: -6.2603, country: 'Ireland' },
    { cityName: 'Warsaw', lat: 52.2297, long: 21.0122, country: 'Poland' },
    { cityName: 'Prague', lat: 50.0755, long: 14.4378, country: 'Czech Republic' },
    { cityName: 'Budapest', lat: 47.4979, long: 19.0402, country: 'Hungary' },
    { cityName: 'Bucharest', lat: 44.4268, long: 26.1025, country: 'Romania' },
    { cityName: 'Sofia', lat: 42.6977, long: 23.3219, country: 'Bulgaria' },
    { cityName: 'Belgrade', lat: 44.7866, long: 20.4489, country: 'Serbia' },
    { cityName: 'Zagreb', lat: 45.815, long: 15.9819, country: 'Croatia' },
    { cityName: 'Sarajevo', lat: 43.8563, long: 18.4131, country: 'Bosnia and Herzegovina' },
    { cityName: 'Ljubljana', lat: 46.0569, long: 14.5058, country: 'Slovenia' },
    { cityName: 'Skopje', lat: 41.9973, long: 21.428, country: 'North Macedonia' },
    { cityName: 'Tirana', lat: 41.3275, long: 19.8187, country: 'Albania' },
    { cityName: 'Podgorica', lat: 42.441, long: 19.2636, country: 'Montenegro' }
  ];
  