import React from "react";
import { useEffect, useState, useRef } from "react";
import countries from "components/footer/countries.json";

const PhoneNumberInput = ({ register, setValue }) => {
  // const [countries, setCountries] = useState(countries);
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [query, setQuery] = useState("");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef();

  useEffect(() => {
    const getCountryFromLanguage = () => {
      let countryCode = "AR"; // Default to Argentina
      try {
        const language = navigator.language || navigator.languages[0];
        countryCode = language.split("-")[1];
      } catch (error) {
        console.error("Error getting country code from language:", error);
      }
      const userCountry = countries.find(
        (c) => c.cca2 === countryCode.toUpperCase()
      );
      if (userCountry) {
        setSelectedCountry(userCountry);
        setValue("countryCode", userCountry.code);
      }
    };

    getCountryFromLanguage();
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
      <label htmlFor="phone" className="font-bold">
        WhatsApp
      </label>
      <div className="flex relative text-black" ref={dropdownRef}>
        {/* Country Selector Button */}
        <button
          type="button"
          className="flex items-center gap-2 px-3 py-2 border rounded-l bg-white hover:bg-gray-100 mb-6"
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
          <div className="absolute z-10 mt-10 w-60 max-h-60 overflow-auto bg-white border rounded custom-shadow">
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
                  setValue("countryCode", country.code);
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
