import { useEffect, useState, useRef } from "react";

const PhoneNumberInput = ({ register }) => {
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [query, setQuery] = useState("");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef();

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all?fields=name,idd,cca2,flags")
      .then((res) => res.json())
      .then((data) => {
        const filtered = data
          .filter((country) => country.idd?.root)
          .map((country) => ({
            name: country.name.common,
            code: `${country.idd.root}${country.idd.suffixes?.[0] || ""}`,
            flag: country.flags.svg,
            cca2: country.cca2,
          }))
          .sort((a, b) => a.name.localeCompare(b.name));
        setCountries(filtered);

        // Set default country to Argentina
        const argentina = filtered.find((country) => country.cca2 === "AR");
        if (argentina) {
          setSelectedCountry(argentina);
        }
      });
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const filteredCountries =
    query === ""
      ? countries
      : countries.filter((c) =>
          c.name.toLowerCase().includes(query.toLowerCase())
        );

  return (
    <>
      <label htmlFor="phone">Phone</label>
      <div className="flex relative text-black" ref={dropdownRef}>
        {/* Country Selector Button */}
        <button
          type="button"
          className="flex items-center gap-2 px-3 py-2 border border-gray-300 rounded-l bg-white hover:bg-gray-100 mb-6"
          onClick={() => setDropdownOpen(!dropdownOpen)}
        >
          {selectedCountry && (
            <>
              <img src={selectedCountry.flag} alt="" className="h-5 w-5" />
              <span className="text-sm">{selectedCountry.code}</span>
            </>
          )}
        </button>

        {/* Dropdown */}
        {dropdownOpen && (
          <div className="absolute z-10 mt-10 w-60 max-h-60 overflow-auto bg-white border border-gray-300 rounded shadow">
            <input
              type="text"
              placeholder="Buscar país..."
              className="w-full px-2 py-1 border-b"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            {filteredCountries.map((country) => (
              <div
                key={country.cca2}
                className="flex items-center px-3 py-2 hover:bg-gray-100 cursor-pointer text-sm"
                onClick={() => {
                  setSelectedCountry(country);
                  setDropdownOpen(false);
                  setQuery("");
                }}
              >
                <img src={country.flag} alt="" className="h-4 w-4 mr-2" />
                {country.name} ({country.code})
              </div>
            ))}
          </div>
        )}

        {/* Phone Input */}
        <input
          type="number"
          className="input-no-spinner"
          placeholder="123456789"
          id="phone"
          name="phone"
          {...register("phone")}
        />
      </div>
    </>
  );
};

export default PhoneNumberInput;
