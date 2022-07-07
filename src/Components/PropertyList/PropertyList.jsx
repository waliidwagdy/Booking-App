import useFetch from "../../Hooks/useFetch";
import "./propertyList.css";
import PropertyListItem from "./PropertyListItem/PropertyListItem";

const photos = [
  "https://www.gannett-cdn.com/-mm-/05b227ad5b8ad4e9dcb53af4f31d7fbdb7fa901b/c=0-64-2119-1259/local/-/media/USATODAY/USATODAY/2014/08/13/1407953244000-177513283.jpg",
  "https://images1.apartments.com/i2/-9wT3fGzQOh0-UkDFdB95Fglv6ufVLThejeHNid0QWo/117/image.jpg",
  "https://media.cntraveler.com/photos/61e6354354fe6df2acc90f92/master/pass/Conrad-Bora-Bora-Nui-CRHotel.jpg",
  "https://images.prismic.io/villaplus/b94890cc-53d4-4003-880b-e511a1bcacb7_tiareII-1121_5143_villa1_3600.jpg",
  "https://www.jasper.travel/media/images/IMG_3663-large_1.2e16d0ba.fill-1370x800.jpg",
];
const PropertyList = () => {
  const { data, loading } = useFetch(
    "https://booking-api-backend.herokuapp.com/api/hotels/countByType"
  );
  return (
    <div className="pList">
      {loading ? (
        "Loading"
      ) : (
        <>
          {photos.map((photo, index) => (
            <PropertyListItem
              key={index}
              imgSrc={photo}
              imgAlt={data[index]?.type}
              title={data[index]?.type}
              properties={data[index]?.count}
            />
          ))}
        </>
      )}
    </div>
  );
};

export default PropertyList;
