import "./propertyList.css";
import PropertyListItem from "./PropertyListItem/PropertyListItem";

const PropertyList = () => {
  return (
    <div className="pList">
      <PropertyListItem
        imgSrc="https://www.gannett-cdn.com/-mm-/05b227ad5b8ad4e9dcb53af4f31d7fbdb7fa901b/c=0-64-2119-1259/local/-/media/USATODAY/USATODAY/2014/08/13/1407953244000-177513283.jpg"
        imgAlt="Hotels"
        title="Hotels"
        properties="100"
      />
      <PropertyListItem
        imgSrc="https://images1.apartments.com/i2/-9wT3fGzQOh0-UkDFdB95Fglv6ufVLThejeHNid0QWo/117/image.jpg"
        imgAlt="Apartments"
        title="Apartments"
        properties="200"
      />
      <PropertyListItem
        imgSrc="https://media.cntraveler.com/photos/61e6354354fe6df2acc90f92/master/pass/Conrad-Bora-Bora-Nui-CRHotel.jpg"
        imgAlt="Resorts"
        title="Resorts"
        properties="230"
      />
      <PropertyListItem
        imgSrc="https://images.prismic.io/villaplus/b94890cc-53d4-4003-880b-e511a1bcacb7_tiareII-1121_5143_villa1_3600.jpg"
        imgAlt="Villas"
        title="Villas"
        properties="50"
      />
      <PropertyListItem
        imgSrc="https://www.jasper.travel/media/images/IMG_3663-large_1.2e16d0ba.fill-1370x800.jpg"
        imgAlt="Cabins"
        title="Cabins"
        properties="30"
      />
    </div>
  );
};

export default PropertyList;
