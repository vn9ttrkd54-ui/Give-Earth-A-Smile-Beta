"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import L from "leaflet";
import {
  MapContainer,
  Marker,
  Popup,
  TileLayer,
  ZoomControl,
} from "react-leaflet";
import MapController from "@/components/impact/MapController";
import {
  impactCountries,
  impactLocations,
  ImpactLocation,
  ImpactLocationType,
  ImpactRegion,
} from "@/data/impactLocations";

type LocationTypeFilter = "all" | ImpactLocationType;
type RegionFilter = "all" | ImpactRegion;

type MapView = {
  latitude: number;
  longitude: number;
  zoom: number;
};

const WORLD_VIEW: MapView = {
  latitude: 20,
  longitude: 5,
  zoom: 2,
};

function createMarkerIcon(type: ImpactLocationType, selected: boolean) {
  const markerLabel = type === "ambassador" ? "A" : "P";
  const markerClass =
    type === "ambassador"
      ? "impact-marker impact-marker-ambassador"
      : "impact-marker impact-marker-project";

  return L.divIcon({
    className: "impact-div-icon",
    html: `
      <div class="${markerClass} ${
        selected ? "impact-marker-selected" : ""
      }" aria-hidden="true">
        <span>${markerLabel}</span>
      </div>
    `,
    iconSize: selected ? [48, 48] : [40, 40],
    iconAnchor: selected ? [24, 24] : [20, 20],
    popupAnchor: [0, selected ? -25 : -21],
  });
}

function getLocationLine(location: ImpactLocation) {
  if (
    location.type === "ambassador" &&
    location.country === "United States"
  ) {
    return [location.city, location.state].filter(Boolean).join(", ");
  }
  const locationParts = [
    location.city,
    location.state &&
    location.state.toLowerCase() !== location.city.toLowerCase()
      ? location.state
      : undefined,
    location.country,
  ].filter(Boolean);

  return locationParts.join(", ");
}

export default function ImpactMapClient() {
  const [searchQuery, setSearchQuery] = useState("");
  const [locationTypeFilter, setLocationTypeFilter] =
    useState<LocationTypeFilter>("all");
  const [regionFilter, setRegionFilter] = useState<RegionFilter>("all");
  const [countryFilter, setCountryFilter] = useState("all");
  const [selectedLocationId, setSelectedLocationId] = useState<string | null>(
    null,
  );
  const [mapView, setMapView] = useState<MapView>(WORLD_VIEW);

  const filteredLocations = useMemo(() => {
    const normalizedSearchQuery = searchQuery.trim().toLowerCase();

    return impactLocations.filter((location) => {
      const matchesType =
        locationTypeFilter === "all" ||
        location.type === locationTypeFilter;

      const matchesRegion =
        regionFilter === "all" || location.region === regionFilter;

      const matchesCountry =
        countryFilter === "all" || location.country === countryFilter;

      const searchableText = [
        location.name,
        location.title,
        location.city,
        location.state,
        location.country,
        location.description,
        location.category,
      ]
        .filter(Boolean)
        .join(" ")
        .toLowerCase();

      const matchesSearch =
        normalizedSearchQuery.length === 0 ||
        searchableText.includes(normalizedSearchQuery);

      return (
        matchesType &&
        matchesRegion &&
        matchesCountry &&
        matchesSearch
      );
    });
  }, [
    countryFilter,
    locationTypeFilter,
    regionFilter,
    searchQuery,
  ]);

  const selectedLocation =
    impactLocations.find(
      (location) => location.id === selectedLocationId,
    ) ?? null;

  const ambassadorCount = impactLocations.filter(
    (location) => location.type === "ambassador",
  ).length;

  const projectCount = impactLocations.filter(
    (location) => location.type === "project",
  ).length;

  function selectLocation(location: ImpactLocation) {
    setSelectedLocationId(location.id);
    setMapView({
      latitude: location.latitude,
      longitude: location.longitude,
      zoom: location.type === "project" ? 7 : 8,
    });
  }

  function resetFilters() {
    setSearchQuery("");
    setLocationTypeFilter("all");
    setRegionFilter("all");
    setCountryFilter("all");
    setSelectedLocationId(null);
    setMapView(WORLD_VIEW);
  }

  function filterToCountry(country: string) {
    setCountryFilter(country);
    setSelectedLocationId(null);

    const firstCountryLocation = impactLocations.find(
      (location) => location.country === country,
    );

    if (firstCountryLocation) {
      setMapView({
        latitude: firstCountryLocation.latitude,
        longitude: firstCountryLocation.longitude,
        zoom: country === "United States" ? 4 : 5,
      });
    }
  }

  return (
    <div className="overflow-hidden border border-[#294638] bg-[#FFFAF0] shadow-xl">
      <div className="grid min-h-[680px] lg:grid-cols-[380px_minmax(0,1fr)]">
        <aside className="order-2 flex max-h-[680px] flex-col border-[#294638] bg-[#FFFAF0] lg:order-1 lg:border-r">
          <div className="border-b border-[#294638]/25 p-5">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#6F8172]">
                  Explore Our Network
                </p>

                <h2 className="mt-2 text-3xl">Global Impact</h2>
              </div>

              <button
                type="button"
                onClick={resetFilters}
                className="shrink-0 border border-[#294638] px-3 py-2 text-xs font-bold text-[#233F31] transition hover:bg-[#233F31] hover:text-white"
              >
                Reset
              </button>
            </div>

            <label
              htmlFor="impact-search"
              className="mt-5 block text-sm font-bold"
            >
              Search locations
            </label>

            <div className="relative mt-2">
              <input
                id="impact-search"
                type="search"
                value={searchQuery}
                onChange={(event) => setSearchQuery(event.target.value)}
                placeholder="Search a name, country, or project..."
                className="w-full border border-[#294638] bg-white px-4 py-3 pr-11 text-sm outline-none transition focus:ring-2 focus:ring-[#B7CA7F]"
              />

              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xl text-[#233F31]/60 hover:text-[#233F31]"
                  aria-label="Clear map search"
                >
                  ×
                </button>
              )}
            </div>

            <div className="mt-4">
              <p className="mb-2 text-xs font-bold uppercase tracking-[0.15em] text-[#6F8172]">
                Type
              </p>

              <div className="flex flex-wrap gap-2">
                {(
                  [
                    ["all", "All"],
                    ["ambassador", "Ambassadors"],
                    ["project", "Projects"],
                  ] as const
                ).map(([value, label]) => (
                  <button
                    key={value}
                    type="button"
                    onClick={() => setLocationTypeFilter(value)}
                    className={`border border-[#294638] px-3 py-2 text-xs font-bold transition ${
                      locationTypeFilter === value
                        ? "bg-[#233F31] text-white"
                        : "bg-transparent text-[#233F31] hover:bg-[#F1F6C8]"
                    }`}
                  >
                    {label}
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-5">
              <p className="mb-2 text-xs font-bold uppercase tracking-[0.15em] text-[#6F8172]">
                Region
              </p>

              <div className="flex flex-wrap gap-2">
                {(
                  [
                    ["all", "All Regions"],
                    ["United States", "United States"],
                    ["International", "International"],
                  ] as const
                ).map(([value, label]) => (
                  <button
                    key={value}
                    type="button"
                    onClick={() => setRegionFilter(value)}
                    className={`border border-[#294638] px-3 py-2 text-xs font-bold transition ${
                      regionFilter === value
                        ? "bg-[#6F8172] text-white"
                        : "bg-transparent text-[#233F31] hover:bg-[#F1F6C8]"
                    }`}
                  >
                    {label}
                  </button>
                ))}
              </div>
            </div>

            <label
              htmlFor="country-filter"
              className="mt-4 block text-sm font-bold"
            >
              Country
            </label>

            <select
              id="country-filter"
              value={countryFilter}
              onChange={(event) => {
                const country = event.target.value;

                if (country === "all") {
                  setCountryFilter("all");
                  setMapView(WORLD_VIEW);
                } else {
                  filterToCountry(country);
                }
              }}
              className="mt-2 w-full border border-[#294638] bg-white px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-[#B7CA7F]"
            >
              <option value="all">All countries</option>

              {impactCountries.map((country) => (
                <option key={country} value={country}>
                  {country}
                </option>
              ))}
            </select>

            <div className="mt-4 grid grid-cols-3 gap-2 bg-[#F1F6C8] p-3 text-center">
              <div>
                <p className="font-[var(--font-heading)] text-2xl">
                  {ambassadorCount}
                </p>
                <p className="text-[10px] font-bold uppercase tracking-wide">
                  Locations
                </p>
              </div>

              <div>
                <p className="font-[var(--font-heading)] text-2xl">
                  {ambassadorCount}
                </p>
                <p className="text-[10px] font-bold uppercase tracking-wide">
                  Ambassadors
                </p>
              </div>

              <div>
                <p className="font-[var(--font-heading)] text-2xl">
                  {projectCount}
                </p>
                <p className="text-[10px] font-bold uppercase tracking-wide">
                  Projects
                </p>
              </div>
            </div>
          </div>

          <div className="flex-1 overflow-y-auto">
            {filteredLocations.length === 0 ? (
              <div className="p-8 text-center">
                <p className="text-2xl">No locations found</p>

                <p className="mt-3 text-sm leading-6 text-[#233F31]/70">
                  Try changing your search or resetting the filters.
                </p>

                <button
                  type="button"
                  onClick={resetFilters}
                  className="mt-5 bg-[#233F31] px-5 py-3 text-sm font-bold text-white"
                >
                  Reset Filters
                </button>
              </div>
            ) : (
              <div>
                {filteredLocations.map((location) => {
                  const isSelected =
                    selectedLocationId === location.id;

                  return (
                    <button
                      key={location.id}
                      type="button"
                      onClick={() => selectLocation(location)}
                      className={`block w-full border-b border-[#294638]/15 p-5 text-left transition ${
                        isSelected
                          ? "bg-[#233F31] text-white"
                          : "hover:bg-[#F1F6C8]"
                      }`}
                    >
                      <div className="flex items-start gap-4">
                        <span
                          className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-sm font-bold ${
                            location.type === "ambassador"
                              ? isSelected
                                ? "bg-white text-[#233F31]"
                                : "bg-[#B7CA7F] text-[#233F31]"
                              : isSelected
                                ? "bg-[#B7CA7F] text-[#233F31]"
                                : "bg-[#233F31] text-white"
                          }`}
                        >
                          {location.type === "ambassador" ? "A" : "P"}
                        </span>

                        <span className="min-w-0">
                          <span className="block font-bold">
                            {location.name}
                          </span>

                          <span
                            className={`mt-1 block text-xs ${
                              isSelected
                                ? "text-white/75"
                                : "text-[#233F31]/65"
                            }`}
                          >
                            {getLocationLine(location)}
                          </span>

                          <span
                            className={`mt-2 inline-block text-[10px] font-bold uppercase tracking-[0.15em] ${
                              isSelected
                                ? "text-[#B7CA7F]"
                                : "text-[#6F8172]"
                            }`}
                          >
                            {location.type}
                          </span>
                        </span>
                      </div>
                    </button>
                  );
                })}
              </div>
            )}
          </div>
        </aside>

        <div className="relative order-1 h-[520px] min-w-0 bg-[#E6ECD5] lg:order-2 lg:h-[680px]">
          <MapContainer
            center={[WORLD_VIEW.latitude, WORLD_VIEW.longitude]}
            zoom={WORLD_VIEW.zoom}
            minZoom={2}
            maxZoom={18}
            scrollWheelZoom
            zoomControl={false}
            worldCopyJump
            className="h-full w-full"
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            <ZoomControl position="bottomright" />

            <MapController
              latitude={mapView.latitude}
              longitude={mapView.longitude}
              zoom={mapView.zoom}
            />

            {filteredLocations.map((location) => {
              const isSelected = selectedLocationId === location.id;

              return (
                <Marker
                  key={location.id}
                  position={[location.latitude, location.longitude]}
                  icon={createMarkerIcon(location.type, isSelected)}
                  title={`${location.name}, ${location.country}`}
                  eventHandlers={{
                    click: () => {
                      setSelectedLocationId(location.id);
                    },
                  }}
                >
                  <Popup minWidth={260} maxWidth={320}>
                    <div className="impact-popup">
                      {location.type === "ambassador" && location.image && (
                        <div className="mb-4 overflow-hidden">
                          <img
                            src={location.image}
                            alt={location.name}
                            className="h-44 w-full object-cover"
                          />
                        </div>
                      )}

                      <div className="flex items-start gap-3">
                        <span
                          className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-sm font-bold ${
                            location.type === "ambassador"
                              ? "bg-[#B7CA7F] text-[#233F31]"
                              : "bg-[#233F31] text-white"
                          }`}
                        >
                          {location.type === "ambassador" ? "A" : "P"}
                        </span>

                        <div>
                          <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#6F8172]">
                            {location.type}
                          </p>

                          <h3 className="mt-1 text-xl leading-tight">
                            {location.name}
                          </h3>
                        </div>
                      </div>

                      <p className="mt-3 text-sm font-bold">
                        {location.title}
                      </p>

                      <p className="mt-1 text-xs text-[#233F31]/65">
                        {getLocationLine(location)}
                      </p>

                      {location.type === "project" && (
                        <p className="mt-4 text-sm leading-6">
                          {location.description}
                        </p>
                      )}

                      {location.category && (
                        <p className="mt-3 inline-block bg-[#F1F6C8] px-3 py-2 text-xs font-bold">
                          {location.category}
                        </p>
                      )}

                      {location.projectSlug && (
                        <Link
                          href={`/projects/${location.projectSlug}`}
                          className="mt-4 block bg-[#233F31] px-4 py-3 text-center text-sm font-bold text-white"
                        >
                          View Project
                        </Link>
                      )}
                    </div>
                  </Popup>
                </Marker>
              );
            })}
          </MapContainer>

          <div className="pointer-events-none absolute left-4 top-4 z-[500] flex flex-col gap-2">
            <div className="flex items-center gap-2 bg-white/95 px-3 py-2 text-xs font-bold shadow-md backdrop-blur">
              <span className="h-4 w-4 rounded-full bg-[#B7CA7F]" />
              Ambassador
            </div>

            <div className="flex items-center gap-2 bg-white/95 px-3 py-2 text-xs font-bold shadow-md backdrop-blur">
              <span className="h-4 w-4 rounded-full bg-[#233F31]" />
              Project
            </div>
          </div>

          {selectedLocation && (
            <div className="absolute bottom-5 left-1/2 z-[500] hidden w-[calc(100%-2rem)] max-w-md -translate-x-1/2 border border-[#294638] bg-white/95 p-4 shadow-xl backdrop-blur md:block">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#6F8172]">
                    Selected {selectedLocation.type}
                  </p>

                  <p className="mt-1 font-bold">
                    {selectedLocation.name}
                  </p>

                  <p className="mt-1 text-xs text-[#233F31]/65">
                    {getLocationLine(selectedLocation)}
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() => setSelectedLocationId(null)}
                  className="text-2xl leading-none"
                  aria-label="Clear selected location"
                >
                  ×
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}