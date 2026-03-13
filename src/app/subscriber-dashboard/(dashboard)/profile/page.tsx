"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

export default function ProfilePage() {
  const [name, setName] = useState("Pandit Demo");
  const [phone, setPhone] = useState("+91 98765 43210");
  const [email, setEmail] = useState("demo@astrologer.com");
  const [bio, setBio] = useState("Vedic astrologer with 10+ years experience.");
  const [experience, setExperience] = useState(10);
  const [address, setAddress] = useState("123 Jyotish Marg");
  const [city, setCity] = useState("Ahmedabad");
  const [state, setState] = useState("Gujarat");
  const [pincode, setPincode] = useState("380001");
  const [formalEducation, setFormalEducation] = useState("BA (Psychology), MA (Philosophy)");
  const [servicesEducation, setServicesEducation] = useState("Jyotish Acharya, Vastu Diploma, Tarot Certification");
  const [mainServices, setMainServices] = useState("Vedic Astrology, Vastu, Tarot");
  const [subServices, setSubServices] = useState("Match Making, Career Guidance, Medical Astrology");
  const [languages, setLanguages] = useState("Hindi, English, Gujarati");
  const [locations, setLocations] = useState("Ahmedabad · Online (India & International)");
  const [territory, setTerritory] = useState("India, GCC, North America");
  const [specializations, setSpecializations] = useState("Marriage, Career, Health, Business");
  const [servicesOffered, setServicesOffered] = useState("Birth Kundali, Match Making, Prashna, Muhurt, Vastu Visit");
  const [awards, setAwards] = useState("Jyotish Ratna 2022, Best Vastu Consultant 2023");

  const handleSave = () => {
    toast.success("Profile saved (demo)");
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Profile</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-3">
              <div>
                <Label>Name</Label>
                <Input value={name} onChange={(e) => setName(e.target.value)} />
              </div>
              <div>
                <Label>Phone</Label>
                <Input value={phone} onChange={(e) => setPhone(e.target.value)} />
              </div>
              <div>
                <Label>Primary Email (login / own email ID)</Label>
                <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
              </div>
              <div>
                <Label>Experience (years)</Label>
                <Input
                  type="number"
                  value={experience}
                  onChange={(e) => setExperience(Number(e.target.value))}
                  className="w-24"
                />
              </div>
            </div>

            <div className="space-y-3">
              <div>
                <Label>Address</Label>
                <Input value={address} onChange={(e) => setAddress(e.target.value)} />
              </div>
              <div className="grid grid-cols-3 gap-3">
                <div>
                  <Label>City</Label>
                  <Input value={city} onChange={(e) => setCity(e.target.value)} />
                </div>
                <div>
                  <Label>State</Label>
                  <Input value={state} onChange={(e) => setState(e.target.value)} />
                </div>
                <div>
                  <Label>Pincode</Label>
                  <Input value={pincode} onChange={(e) => setPincode(e.target.value)} />
                </div>
              </div>
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-3">
              <div>
                <Label>Formal Education</Label>
                <Textarea
                  value={formalEducation}
                  onChange={(e) => setFormalEducation(e.target.value)}
                  rows={3}
                />
              </div>
              <div>
                <Label>Services Education (Astrology / Vastu / Tarot etc.)</Label>
                <Textarea
                  value={servicesEducation}
                  onChange={(e) => setServicesEducation(e.target.value)}
                  rows={3}
                />
              </div>
            </div>

            <div className="space-y-3">
              <div>
                <Label>Main Services</Label>
                <Input
                  value={mainServices}
                  onChange={(e) => setMainServices(e.target.value)}
                  placeholder="e.g. Vedic Astrology, Vastu, Tarot"
                />
              </div>
              <div>
                <Label>Sub Services</Label>
                <Input
                  value={subServices}
                  onChange={(e) => setSubServices(e.target.value)}
                  placeholder="e.g. Match Making, Career, Medical Astrology"
                />
              </div>
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-3">
              <div>
                <Label>Languages</Label>
                <Input value={languages} onChange={(e) => setLanguages(e.target.value)} />
              </div>
              <div>
                <Label>Location</Label>
                <Input value={locations} onChange={(e) => setLocations(e.target.value)} />
              </div>
              <div>
                <Label>Choice of Territory</Label>
                <Input
                  value={territory}
                  onChange={(e) => setTerritory(e.target.value)}
                  placeholder="Regions / countries you want to serve"
                />
              </div>
            </div>

            <div className="space-y-3">
              <div>
                <Label>Specializations</Label>
                <Input
                  value={specializations}
                  onChange={(e) => setSpecializations(e.target.value)}
                  placeholder="e.g. Marriage, Career, Health, Business"
                />
              </div>
              <div>
                <Label>Services Offered</Label>
                <Textarea
                  value={servicesOffered}
                  onChange={(e) => setServicesOffered(e.target.value)}
                  rows={3}
                />
              </div>
              <div>
                <Label>Awards &amp; Recognitions</Label>
                <Textarea value={awards} onChange={(e) => setAwards(e.target.value)} rows={2} />
              </div>
            </div>
          </div>

          <div>
            <Label>Short Bio</Label>
            <Textarea value={bio} onChange={(e) => setBio(e.target.value)} rows={4} />
          </div>

          <div>
            <Label>KYC</Label>
            <p className="text-sm text-muted-foreground">
              KYC upload &amp; verification will appear here (demo placeholder).
            </p>
          </div>

          <Button onClick={handleSave}>Save</Button>
        </CardContent>
      </Card>
    </div>
  );
}
