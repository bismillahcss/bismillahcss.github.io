"use client"

import { DropdownMenuShortcut } from "@/components/ui/dropdown-menu"

import { useState } from "react"
import { motion } from "framer-motion"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { PageTransition } from "@/components/page-transition"
import { FuturisticBackground } from "@/components/futuristic-background"
import { AnimatedGradientText } from "@/components/animated-gradient-text"
import { GlowButton } from "@/components/glow-button"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { Switch } from "@/components/ui/switch"
import { Textarea } from "@/components/ui/textarea"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { useToast } from "@/hooks/use-toast"
import {
  AlertCircle,
  CheckCircle2,
  Info,
  Copy,
  Download,
  Search,
  Settings,
  User,
  Bell,
  Calendar,
  Mail,
  Home,
  Heart,
  Trash,
  Edit,
  Plus,
  ArrowRight,
  ArrowLeft,
  ChevronDown,
} from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Progress } from "@/components/ui/progress"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import Link from "next/link"
import {
  HeroUltra,
  NavbarUltra,
  FeatureCardsUltra,
  SidebarUltra,
  GlowButtonsUltra,
  DashboardUltra,
  PricingUltra,
  TableUltra,
  GlassButtonUltra,
  BadgeNeonUltra,
  CyberInputUltra,
  GradientCardUltra,
  AuroraBgElite,
  TooltipCyberElite,
  InputEliteUltra,
  CardFloatElite,
  CardRoyalElite,
  RoyalSilkButton,
  CardPrismElite,
  ProgressVaporElite,
  CardVaporElite
} from "@/components/ultra-components"

export default function ComponentsShowcasePage() {
  const [activeCategory, setActiveCategory] = useState("buttons")
  const { toast } = useToast()
  const [progress, setProgress] = useState(45)
  const [isOpen, setIsOpen] = useState(false)
  const [commandOpen, setCommandOpen] = useState(false)

  const categories = [
    { id: "buttons", name: "Buttons" },
    { id: "cards", name: "Cards" },
    { id: "inputs", name: "Inputs & Forms" },
    { id: "feedback", name: "Feedback" },
    { id: "navigation", name: "Navigation" },
    { id: "overlays", name: "Overlays" },
    { id: "data-display", name: "Data Display" },
    { id: "layout", name: "Layout" },
    { id: "special", name: "Special Effects" },
    { id: "ultra", name: "Ultra Components" },
  ]

  // Sample data for tables
  const invoices = [
    {
      invoice: "INV001",
      paymentStatus: "Paid",
      totalAmount: "$250.00",
      paymentMethod: "Credit Card",
    },
    {
      invoice: "INV002",
      paymentStatus: "Pending",
      totalAmount: "$150.00",
      paymentMethod: "PayPal",
    },
    {
      invoice: "INV003",
      paymentStatus: "Unpaid",
      totalAmount: "$350.00",
      paymentMethod: "Bank Transfer",
    },
    {
      invoice: "INV004",
      paymentStatus: "Paid",
      totalAmount: "$450.00",
      paymentMethod: "Credit Card",
    },
    {
      invoice: "INV005",
      paymentStatus: "Paid",
      totalAmount: "$550.00",
      paymentMethod: "PayPal",
    },
  ]

  return (
    <PageTransition>
      <div className="container py-10 relative">
        <FuturisticBackground variant="grid" intensity="light" />
        <div className="relative z-10">
          <div className="mb-10 text-center">
            <h1 className="text-4xl font-bold tracking-tight mb-4">
              <AnimatedGradientText>BismillahCSS Components</AnimatedGradientText>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A comprehensive showcase of all components available in the BismillahCSS framework
            </p>
          </div>

          <Tabs defaultValue="buttons" value={activeCategory} onValueChange={setActiveCategory} className="w-full">
            <div className="mb-8 overflow-x-auto">
              <TabsList className="inline-flex w-max p-1">
                {categories.map((category) => (
                  <TabsTrigger key={category.id} value={category.id} className="px-4 py-2">
                    {category.name}
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>

            {/* Buttons Section */}
            <TabsContent value="buttons" className="space-y-12">
              <section className="space-y-4">
                <h2 className="text-2xl font-bold">Standard Buttons</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <Card>
                    <CardHeader>
                      <CardTitle>Button Variants</CardTitle>
                      <CardDescription>Different button styles for various contexts</CardDescription>
                    </CardHeader>
                    <CardContent className="flex flex-wrap gap-4">
                      <Button variant="default">Default</Button>
                      <Button variant="destructive">Destructive</Button>
                      <Button variant="outline">Outline</Button>
                      <Button variant="secondary">Secondary</Button>
                      <Button variant="ghost">Ghost</Button>
                      <Button variant="link">Link</Button>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Button Sizes</CardTitle>
                      <CardDescription>Buttons in different sizes for various contexts</CardDescription>
                    </CardHeader>
                    <CardContent className="flex flex-wrap items-center gap-4">
                      <Button size="sm">Small</Button>
                      <Button size="default">Default</Button>
                      <Button size="lg">Large</Button>
                      <Button size="icon" className="ml-4">
                        <Plus className="h-4 w-4" />
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-bold">Button States</h2>
                <Card>
                  <CardHeader>
                    <CardTitle>Button States</CardTitle>
                    <CardDescription>Buttons in different states</CardDescription>
                  </CardHeader>
                  <CardContent className="flex flex-wrap gap-4">
                    <Button>Default</Button>
                    <Button disabled>Disabled</Button>
                    <Button variant="outline" className="border-dashed">
                      Dashed
                    </Button>
                    <Button className="bg-primary/50 hover:bg-primary/70">Muted</Button>
                    <Button className="animate-pulse">Animated</Button>
                  </CardContent>
                </Card>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-bold">Button with Icons</h2>
                <Card>
                  <CardHeader>
                    <CardTitle>Button with Icons</CardTitle>
                    <CardDescription>Buttons with icons for enhanced visual cues</CardDescription>
                  </CardHeader>
                  <CardContent className="flex flex-wrap gap-4">
                    <Button>
                      <Mail className="mr-2 h-4 w-4" /> Email
                    </Button>
                    <Button variant="outline">
                      <Download className="mr-2 h-4 w-4" /> Download
                    </Button>
                    <Button variant="secondary">
                      Settings <Settings className="ml-2 h-4 w-4" />
                    </Button>
                    <Button variant="ghost">
                      <Heart className="mr-2 h-4 w-4" /> Like
                    </Button>
                    <Button variant="destructive">
                      <Trash className="mr-2 h-4 w-4" /> Delete
                    </Button>
                  </CardContent>
                </Card>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-bold">Special Effect Buttons</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <Card>
                    <CardHeader>
                      <CardTitle>Glow Buttons</CardTitle>
                      <CardDescription>Buttons with glow effects</CardDescription>
                    </CardHeader>
                    <CardContent className="flex flex-wrap gap-4">
                      <GlowButton>Glow Default</GlowButton>
                      <GlowButton variant="outline">Glow Outline</GlowButton>
                      <GlowButton glowIntensity="strong">Strong Glow</GlowButton>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Animated Buttons</CardTitle>
                      <CardDescription>Buttons with animations</CardDescription>
                    </CardHeader>
                    <CardContent className="flex flex-wrap gap-4">
                      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                        <Button>Scale on Hover</Button>
                      </motion.div>
                      <motion.div whileHover={{ rotate: 5 }} whileTap={{ rotate: -5 }}>
                        <Button variant="outline">Rotate on Hover</Button>
                      </motion.div>
                      <motion.div
                        whileHover={{
                          boxShadow: "0 0 15px rgba(99, 102, 241, 0.8)",
                          y: -5,
                        }}
                      >
                        <Button variant="secondary">Lift on Hover</Button>
                      </motion.div>
                    </CardContent>
                  </Card>
                </div>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-bold">Button Groups</h2>
                <Card>
                  <CardHeader>
                    <CardTitle>Button Groups</CardTitle>
                    <CardDescription>Groups of related buttons</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex flex-wrap">
                      <Button className="rounded-r-none">Left</Button>
                      <Button className="rounded-none border-x-0">Middle</Button>
                      <Button className="rounded-l-none">Right</Button>
                    </div>
                    <div className="flex flex-wrap">
                      <Button variant="outline" className="rounded-r-none">
                        <ArrowLeft className="h-4 w-4" />
                      </Button>
                      <Button variant="outline" className="rounded-none border-x-0">
                        <Home className="h-4 w-4" />
                      </Button>
                      <Button variant="outline" className="rounded-l-none">
                        <ArrowRight className="h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </section>
            </TabsContent>

            {/* Cards Section */}
            <TabsContent value="cards" className="space-y-12">
              <section className="space-y-4">
                <h2 className="text-2xl font-bold">Basic Cards</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Simple Card</CardTitle>
                      <CardDescription>A basic card with title and description</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p>This is a simple card with some content. Cards are useful for organizing information.</p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Card with Footer</CardTitle>
                      <CardDescription>A card with actions in the footer</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p>This card includes a footer with action buttons.</p>
                    </CardContent>
                    <CardFooter className="flex justify-between">
                      <Button variant="outline">Cancel</Button>
                      <Button>Save</Button>
                    </CardFooter>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Card with Image</CardTitle>
                      <CardDescription>A card with an image</CardDescription>
                    </CardHeader>
                    <CardContent className="p-0">
                      <img
                        src="/placeholder.svg?height=200&width=400"
                        alt="Placeholder"
                        className="w-full h-40 object-cover"
                      />
                      <div className="p-6">
                        <p>This card includes an image at the top.</p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-bold">Interactive Cards</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    <Card className="cursor-pointer">
                      <CardHeader>
                        <CardTitle>Hover Card</CardTitle>
                        <CardDescription>This card scales on hover</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p>Hover over this card to see it scale up slightly.</p>
                      </CardContent>
                    </Card>
                  </motion.div>

                  <motion.div
                    whileHover={{
                      y: -10,
                      boxShadow: "0 15px 30px rgba(0, 0, 0, 0.2)",
                    }}
                  >
                    <Card className="cursor-pointer">
                      <CardHeader>
                        <CardTitle>Lift Card</CardTitle>
                        <CardDescription>This card lifts on hover</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p>Hover over this card to see it lift up with a shadow.</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                </div>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-bold">Special Effect Cards</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <Card className="bg-white/20 backdrop-blur-md border border-white/30">
                    <CardHeader>
                      <CardTitle>Glass Card</CardTitle>
                      <CardDescription>A card with glassmorphism effect</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p>This card has a glassmorphism effect with backdrop blur.</p>
                    </CardContent>
                  </Card>

                  <Card className="bg-gradient-to-r from-blue-500 to-purple-500 text-white">
                    <CardHeader>
                      <CardTitle>Gradient Card</CardTitle>
                      <CardDescription className="text-white/80">A card with gradient background</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p>This card has a beautiful gradient background.</p>
                    </CardContent>
                  </Card>

                  <div className="relative h-[250px] perspective-[1000px] group">
                    <div className="absolute inset-0 transition-all duration-500 transform-style-preserve-3d group-hover:rotate-y-180">
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg p-6 text-white backface-hidden">
                        <h3 className="text-lg font-semibold mb-2">Flip Card Front</h3>
                        <p>Hover to see the back side</p>
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg p-6 text-white backface-hidden rotate-y-180">
                        <h3 className="text-lg font-semibold mb-2">Flip Card Back</h3>
                        <p>This is the back side of the card</p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </TabsContent>

            {/* Inputs & Forms Section */}
            <TabsContent value="inputs" className="space-y-12">
              <section className="space-y-4">
                <h2 className="text-2xl font-bold">Basic Inputs</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <Card>
                    <CardHeader>
                      <CardTitle>Text Inputs</CardTitle>
                      <CardDescription>Basic text input fields</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="grid w-full items-center gap-1.5">
                        <Label htmlFor="email">Email</Label>
                        <Input type="email" id="email" placeholder="Email" />
                      </div>
                      <div className="grid w-full items-center gap-1.5">
                        <Label htmlFor="password">Password</Label>
                        <Input type="password" id="password" placeholder="Password" />
                      </div>
                      <div className="grid w-full items-center gap-1.5">
                        <Label htmlFor="disabled">Disabled</Label>
                        <Input type="text" id="disabled" placeholder="Disabled" disabled />
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Input with Icons</CardTitle>
                      <CardDescription>Text inputs with icons</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="relative">
                        <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                        <Input type="text" placeholder="Search..." className="pl-8" />
                      </div>
                      <div className="relative">
                        <Input type="text" placeholder="Username" className="pl-8" />
                        <User className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                      </div>
                      <div className="relative">
                        <Input type="email" placeholder="Email" className="pr-8" />
                        <Mail className="absolute right-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-bold">Selection Controls</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Checkbox</CardTitle>
                      <CardDescription>Checkbox selection controls</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="flex items-center space-x-2">
                        <Checkbox id="terms" />
                        <Label htmlFor="terms">Accept terms and conditions</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="newsletter" defaultChecked />
                        <Label htmlFor="newsletter">Subscribe to newsletter</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="disabled" disabled />
                        <Label htmlFor="disabled" className="text-muted-foreground">
                          Disabled option
                        </Label>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Radio Group</CardTitle>
                      <CardDescription>Radio button selection controls</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <RadioGroup defaultValue="option-one">
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="option-one" id="option-one" />
                          <Label htmlFor="option-one">Option One</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="option-two" id="option-two" />
                          <Label htmlFor="option-two">Option Two</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="option-three" id="option-three" disabled />
                          <Label htmlFor="option-three" className="text-muted-foreground">
                            Option Three (Disabled)
                          </Label>
                        </div>
                      </RadioGroup>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Switch</CardTitle>
                      <CardDescription>Toggle switch controls</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="flex items-center space-x-2">
                        <Switch id="airplane-mode" />
                        <Label htmlFor="airplane-mode">Airplane Mode</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Switch id="wifi" defaultChecked />
                        <Label htmlFor="wifi">WiFi</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Switch id="bluetooth" disabled />
                        <Label htmlFor="bluetooth" className="text-muted-foreground">
                          Bluetooth (Disabled)
                        </Label>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-bold">Advanced Inputs</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Select</CardTitle>
                      <CardDescription>Dropdown selection controls</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="grid w-full items-center gap-1.5">
                        <Label htmlFor="framework">Framework</Label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Select a framework" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="next">Next.js</SelectItem>
                            <SelectItem value="react">React</SelectItem>
                            <SelectItem value="vue">Vue</SelectItem>
                            <SelectItem value="angular">Angular</SelectItem>
                            <SelectItem value="svelte">Svelte</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Slider</CardTitle>
                      <CardDescription>Range slider controls</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="grid w-full items-center gap-1.5">
                        <div className="flex justify-between">
                          <Label htmlFor="volume">Volume: {progress}%</Label>
                        </div>
                        <Slider
                          id="volume"
                          defaultValue={[45]}
                          max={100}
                          step={1}
                          onValueChange={(value) => setProgress(value[0])}
                        />
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-bold">Form Layout</h2>
                <Card>
                  <CardHeader>
                    <CardTitle>Contact Form</CardTitle>
                    <CardDescription>A complete form example</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="grid w-full items-center gap-1.5">
                        <Label htmlFor="first-name">First Name</Label>
                        <Input type="text" id="first-name" placeholder="First Name" />
                      </div>
                      <div className="grid w-full items-center gap-1.5">
                        <Label htmlFor="last-name">Last Name</Label>
                        <Input type="text" id="last-name" placeholder="Last Name" />
                      </div>
                    </div>
                    <div className="grid w-full items-center gap-1.5">
                      <Label htmlFor="email-address">Email</Label>
                      <Input type="email" id="email-address" placeholder="Email Address" />
                    </div>
                    <div className="grid w-full items-center gap-1.5">
                      <Label htmlFor="message">Message</Label>
                      <Textarea id="message" placeholder="Your message" />
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="marketing" />
                      <Label htmlFor="marketing">Receive marketing emails</Label>
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    <Button variant="outline">Cancel</Button>
                    <Button>Submit</Button>
                  </CardFooter>
                </Card>
              </section>
            </TabsContent>

            {/* Feedback Section */}
            <TabsContent value="feedback" className="space-y-12">
              <section className="space-y-4">
                <h2 className="text-2xl font-bold">Alerts</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Alert Variants</CardTitle>
                      <CardDescription>Different alert styles for various contexts</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <Alert>
                        <Info className="h-4 w-4" />
                        <AlertTitle>Information</AlertTitle>
                        <AlertDescription>This is an informational alert with neutral styling.</AlertDescription>
                      </Alert>
                      <Alert variant="destructive">
                        <AlertCircle className="h-4 w-4" />
                        <AlertTitle>Error</AlertTitle>
                        <AlertDescription>This is an error alert with destructive styling.</AlertDescription>
                      </Alert>
                      <Alert className="bg-green-50 text-green-800 border-green-200 dark:bg-green-900/50 dark:text-green-300 dark:border-green-800">
                        <CheckCircle2 className="h-4 w-4" />
                        <AlertTitle>Success</AlertTitle>
                        <AlertDescription>This is a success alert with custom styling.</AlertDescription>
                      </Alert>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Alert with Actions</CardTitle>
                      <CardDescription>Alerts with interactive elements</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <Alert>
                        <Info className="h-4 w-4" />
                        <AlertTitle>Browser Update Available</AlertTitle>
                        <AlertDescription className="flex items-center justify-between">
                          <span>A new version of your browser is available.</span>
                          <Button size="sm" variant="outline">
                            Update
                          </Button>
                        </AlertDescription>
                      </Alert>
                      <Alert className="bg-yellow-50 text-yellow-800 border-yellow-200 dark:bg-yellow-900/50 dark:text-yellow-300 dark:border-yellow-800">
                        <AlertCircle className="h-4 w-4" />
                        <AlertTitle>Warning</AlertTitle>
                        <AlertDescription className="flex flex-col space-y-2">
                          <span>Your subscription will expire in 3 days.</span>
                          <div className="flex space-x-2">
                            <Button size="sm" variant="outline">
                              Dismiss
                            </Button>
                            <Button size="sm">Renew Now</Button>
                          </div>
                        </AlertDescription>
                      </Alert>
                    </CardContent>
                  </Card>
                </div>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-bold">Progress Indicators</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Progress Bar</CardTitle>
                      <CardDescription>Visual indicators for progress</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <Label>Default Progress (45%)</Label>
                          <span className="text-sm text-muted-foreground">45%</span>
                        </div>
                        <Progress value={45} />
                      </div>
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <Label>Download Progress (75%)</Label>
                          <span className="text-sm text-muted-foreground">75%</span>
                        </div>
                        <Progress value={75} className="h-3" />
                      </div>
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <Label>Upload Progress (25%)</Label>
                          <span className="text-sm text-muted-foreground">25%</span>
                        </div>
                        <Progress value={25} className="h-2" />
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Step Progress</CardTitle>
                      <CardDescription>Multi-step progress indicators</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="relative flex items-center justify-between w-full">
                        <div className="absolute h-0.5 bg-gray-200 w-full"></div>
                        <div className="absolute h-0.5 bg-primary w-1/2"></div>

                        <div className="relative z-10 flex items-center justify-center w-10 h-10 bg-primary text-white rounded-full">
                          1
                        </div>

                        <div className="relative z-10 flex items-center justify-center w-10 h-10 bg-primary text-white rounded-full">
                          2
                        </div>

                        <div className="relative z-10 flex items-center justify-center w-10 h-10 bg-gray-200 text-gray-600 rounded-full">
                          3
                        </div>
                      </div>
                      <div className="flex justify-between mt-2 px-1">
                        <span className="text-sm">Details</span>
                        <span className="text-sm">Payment</span>
                        <span className="text-sm text-muted-foreground">Confirm</span>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-bold">Toasts & Notifications</h2>
                <Card>
                  <CardHeader>
                    <CardTitle>Toast Notifications</CardTitle>
                    <CardDescription>Temporary notifications for user feedback</CardDescription>
                  </CardHeader>
                  <CardContent className="flex flex-wrap gap-4">
                    <Button
                      onClick={() => {
                        toast({
                          title: "Success",
                          description: "Your action was completed successfully.",
                        })
                      }}
                    >
                      Show Success Toast
                    </Button>
                    <Button
                      variant="outline"
                      onClick={() => {
                        toast({
                          title: "Information",
                          description: "Here's some information you should know.",
                          variant: "default",
                        })
                      }}
                    >
                      Show Info Toast
                    </Button>
                    <Button
                      variant="destructive"
                      onClick={() => {
                        toast({
                          title: "Error",
                          description: "There was a problem with your request.",
                          variant: "destructive",
                        })
                      }}
                    >
                      Show Error Toast
                    </Button>
                    <Button
                      variant="secondary"
                      onClick={() => {
                        toast({
                          title: "With Action",
                          description: "This toast has an action button.",
                          action: (
                            <Button size="sm" variant="outline">
                              Undo
                            </Button>
                          ),
                        })
                      }}
                    >
                      Toast with Action
                    </Button>
                  </CardContent>
                </Card>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-bold">Tooltips</h2>
                <Card>
                  <CardHeader>
                    <CardTitle>Tooltips</CardTitle>
                    <CardDescription>Informational text that appears on hover</CardDescription>
                  </CardHeader>
                  <CardContent className="flex flex-wrap gap-4">
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <Button variant="outline">Hover Me</Button>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>This is a tooltip</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>

                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <Button variant="outline" size="icon">
                            <Info className="h-4 w-4" />
                          </Button>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Additional information</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>

                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <Button>Save</Button>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Save your changes</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </CardContent>
                </Card>
              </section>
            </TabsContent>

            {/* Navigation Section */}
            <TabsContent value="navigation" className="space-y-12">
              <section className="space-y-4">
                <h2 className="text-2xl font-bold">Navigation Menu</h2>
                <Card>
                  <CardHeader>
                    <CardTitle>Navigation Menu</CardTitle>
                    <CardDescription>Dropdown navigation menus</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <NavigationMenu>
                      <NavigationMenuList>
                        <NavigationMenuItem>
                          <NavigationMenuTrigger>Getting Started</NavigationMenuTrigger>
                          <NavigationMenuContent>
                            <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-2">
                              <li className="row-span-3">
                                <NavigationMenuLink asChild>
                                  <a
                                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-primary/50 to-primary p-6 no-underline outline-none focus:shadow-md"
                                    href="/"
                                  >
                                    <div className="mt-4 mb-2 text-lg font-medium text-white">BismillahCSS</div>
                                    <p className="text-sm leading-tight text-white/90">
                                      A utility-first CSS framework for rapid UI development
                                    </p>
                                  </a>
                                </NavigationMenuLink>
                              </li>
                              <li>
                                <NavigationMenuLink asChild>
                                  <a
                                    className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                                    href="/docs"
                                  >
                                    <div className="text-sm font-medium leading-none">Documentation</div>
                                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                      Learn how to use BismillahCSS components
                                    </p>
                                  </a>
                                </NavigationMenuLink>
                              </li>
                              <li>
                                <NavigationMenuLink asChild>
                                  <a
                                    className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                                    href="/docs/installation"
                                  >
                                    <div className="text-sm font-medium leading-none">Installation</div>
                                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                      How to install and set up BismillahCSS
                                    </p>
                                  </a>
                                </NavigationMenuLink>
                              </li>
                              <li>
                                <NavigationMenuLink asChild>
                                  <a
                                    className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                                    href="/components"
                                  >
                                    <div className="text-sm font-medium leading-none">Components</div>
                                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                      Explore all available components
                                    </p>
                                  </a>
                                </NavigationMenuLink>
                              </li>
                            </ul>
                          </NavigationMenuContent>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                          <NavigationMenuTrigger>Components</NavigationMenuTrigger>
                          <NavigationMenuContent>
                            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                              {["Buttons", "Cards", "Forms", "Layout", "Navigation"].map((component) => (
                                <li key={component}>
                                  <NavigationMenuLink asChild>
                                    <a
                                      className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                                      href={`/components/${component.toLowerCase()}`}
                                    >
                                      <div className="text-sm font-medium leading-none">{component}</div>
                                      <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                        {component} components and examples
                                      </p>
                                    </a>
                                  </NavigationMenuLink>
                                </li>
                              ))}
                            </ul>
                          </NavigationMenuContent>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                          <Link href="/about" legacyBehavior passHref>
                            <NavigationMenuLink className="font-medium">About</NavigationMenuLink>
                          </Link>
                        </NavigationMenuItem>
                      </NavigationMenuList>
                    </NavigationMenu>
                  </CardContent>
                </Card>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-bold">Breadcrumbs</h2>
                <Card>
                  <CardHeader>
                    <CardTitle>Breadcrumbs</CardTitle>
                    <CardDescription>Navigation path indicators</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <Breadcrumb>
                      <BreadcrumbList>
                        <BreadcrumbItem>
                          <BreadcrumbLink href="/">Home</BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator />
                        <BreadcrumbItem>
                          <BreadcrumbLink href="/components">Components</BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator />
                        <BreadcrumbItem>
                          <BreadcrumbPage>Breadcrumbs</BreadcrumbPage>
                        </BreadcrumbItem>
                      </BreadcrumbList>
                    </Breadcrumb>

                    <Breadcrumb>
                      <BreadcrumbList>
                        <BreadcrumbItem>
                          <BreadcrumbLink href="/">
                            <Home className="h-4 w-4 mr-1" />
                            Home
                          </BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator />
                        <BreadcrumbItem>
                          <BreadcrumbLink href="/products">Products</BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator />
                        <BreadcrumbItem>
                          <BreadcrumbLink href="/products/electronics">Electronics</BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator />
                        <BreadcrumbItem>
                          <BreadcrumbPage>Smartphones</BreadcrumbPage>
                        </BreadcrumbItem>
                      </BreadcrumbList>
                    </Breadcrumb>
                  </CardContent>
                </Card>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-bold">Tabs</h2>
                <Card>
                  <CardHeader>
                    <CardTitle>Tabs</CardTitle>
                    <CardDescription>Tabbed interface for switching between views</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Tabs defaultValue="account" className="w-full">
                      <TabsList className="grid w-full grid-cols-3">
                        <TabsTrigger value="account">Account</TabsTrigger>
                        <TabsTrigger value="password">Password</TabsTrigger>
                        <TabsTrigger value="settings">Settings</TabsTrigger>
                      </TabsList>
                      <TabsContent value="account" className="p-4 border rounded-md mt-2">
                        <h3 className="text-lg font-medium">Account Settings</h3>
                        <p className="text-sm text-muted-foreground mt-1">
                          Manage your account settings and preferences.
                        </p>
                      </TabsContent>
                      <TabsContent value="password" className="p-4 border rounded-md mt-2">
                        <h3 className="text-lg font-medium">Password Settings</h3>
                        <p className="text-sm text-muted-foreground mt-1">
                          Change your password and security settings.
                        </p>
                      </TabsContent>
                      <TabsContent value="settings" className="p-4 border rounded-md mt-2">
                        <h3 className="text-lg font-medium">General Settings</h3>
                        <p className="text-sm text-muted-foreground mt-1">Configure your application preferences.</p>
                      </TabsContent>
                    </Tabs>
                  </CardContent>
                </Card>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-bold">Command Menu</h2>
                <Card>
                  <CardHeader>
                    <CardTitle>Command Menu</CardTitle>
                    <CardDescription>Command palette for quick navigation</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button
                      onClick={() => setCommandOpen(true)}
                      className="w-full justify-between text-muted-foreground"
                      variant="outline"
                    >
                      <span>Search documentation...</span>
                      <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100">
                        <span className="text-xs">⌘</span>K
                      </kbd>
                    </Button>
                    <CommandDialog open={commandOpen} onOpenChange={setCommandOpen}>
                      <CommandInput placeholder="Type a command or search..." />
                      <CommandList>
                        <CommandEmpty>No results found.</CommandEmpty>
                        <CommandGroup heading="Suggestions">
                          <CommandItem>
                            <Calendar className="mr-2 h-4 w-4" />
                            <span>Calendar</span>
                          </CommandItem>
                          <CommandItem>
                            <Mail className="mr-2 h-4 w-4" />
                            <span>Mail</span>
                            <CommandShortcut>⌘M</CommandShortcut>
                          </CommandItem>
                          <CommandItem>
                            <Settings className="mr-2 h-4 w-4" />
                            <span>Settings</span>
                            <CommandShortcut>⌘S</CommandShortcut>
                          </CommandItem>
                        </CommandGroup>
                        <CommandSeparator />
                        <CommandGroup heading="Documentation">
                          <CommandItem>
                            <span>Introduction</span>
                          </CommandItem>
                          <CommandItem>
                            <span>Getting Started</span>
                          </CommandItem>
                          <CommandItem>
                            <span>Components</span>
                          </CommandItem>
                        </CommandGroup>
                      </CommandList>
                    </CommandDialog>
                  </CardContent>
                </Card>
              </section>
            </TabsContent>

            {/* Overlays Section */}
            <TabsContent value="overlays" className="space-y-12">
              <section className="space-y-4">
                <h2 className="text-2xl font-bold">Dialogs</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Dialog</CardTitle>
                      <CardDescription>Modal dialog windows</CardDescription>
                    </CardHeader>
                    <CardContent className="flex flex-wrap gap-4">
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button>Open Dialog</Button>
                        </DialogTrigger>
                        <DialogContent>
                          <DialogHeader>
                            <DialogTitle>Edit Profile</DialogTitle>
                            <DialogDescription>
                              Make changes to your profile here. Click save when you're done.
                            </DialogDescription>
                          </DialogHeader>
                          <div className="grid gap-4 py-4">
                            <div className="grid grid-cols-4 items-center gap-4">
                              <Label htmlFor="name" className="text-right">
                                Name
                              </Label>
                              <Input id="name" value="John Doe" className="col-span-3" />
                            </div>
                            <div className="grid grid-cols-4 items-center gap-4">
                              <Label htmlFor="username" className="text-right">
                                Username
                              </Label>
                              <Input id="username" value="@johndoe" className="col-span-3" />
                            </div>
                          </div>
                          <DialogFooter>
                            <Button type="submit">Save changes</Button>
                          </DialogFooter>
                        </DialogContent>
                      </Dialog>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Alert Dialog</CardTitle>
                      <CardDescription>Confirmation dialogs for critical actions</CardDescription>
                    </CardHeader>
                    <CardContent className="flex flex-wrap gap-4">
                      <AlertDialog>
                        <AlertDialogTrigger asChild>
                          <Button variant="destructive">Delete Account</Button>
                        </AlertDialogTrigger>
                        <AlertDialogContent>
                          <AlertDialogHeader>
                            <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                            <AlertDialogDescription>
                              This action cannot be undone. This will permanently delete your account and remove your
                              data from our servers.
                            </AlertDialogDescription>
                          </AlertDialogHeader>
                          <AlertDialogFooter>
                            <AlertDialogCancel>Cancel</AlertDialogCancel>
                            <AlertDialogAction>Continue</AlertDialogAction>
                          </AlertDialogFooter>
                        </AlertDialogContent>
                      </AlertDialog>
                    </CardContent>
                  </Card>
                </div>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-bold">Popovers & Hover Cards</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Popover</CardTitle>
                      <CardDescription>Contextual floating panels</CardDescription>
                    </CardHeader>
                    <CardContent className="flex flex-wrap gap-4">
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button variant="outline">Open Popover</Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-80">
                          <div className="grid gap-4">
                            <div className="space-y-2">
                              <h4 className="font-medium leading-none">Dimensions</h4>
                              <p className="text-sm text-muted-foreground">Set the dimensions for the layer.</p>
                            </div>
                            <div className="grid gap-2">
                              <div className="grid grid-cols-3 items-center gap-4">
                                <Label htmlFor="width">Width</Label>
                                <Input id="width" defaultValue="100%" className="col-span-2 h-8" />
                              </div>
                              <div className="grid grid-cols-3 items-center gap-4">
                                <Label htmlFor="height">Height</Label>
                                <Input id="height" defaultValue="25px" className="col-span-2 h-8" />
                              </div>
                            </div>
                          </div>
                        </PopoverContent>
                      </Popover>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Hover Card</CardTitle>
                      <CardDescription>Rich preview cards on hover</CardDescription>
                    </CardHeader>
                    <CardContent className="flex flex-wrap gap-4">
                      <HoverCard>
                        <HoverCardTrigger asChild>
                          <Button variant="link">@johndoe</Button>
                        </HoverCardTrigger>
                        <HoverCardContent className="w-80">
                          <div className="flex justify-between space-x-4">
                            <Avatar>
                              <AvatarImage src="/placeholder.svg?height=40&width=40" />
                              <AvatarFallback>JD</AvatarFallback>
                            </Avatar>
                            <div className="space-y-1">
                              <h4 className="text-sm font-semibold">John Doe</h4>
                              <p className="text-sm">
                                Software developer and UI/UX enthusiast. Passionate about creating beautiful user
                                interfaces.
                              </p>
                              <div className="flex items-center pt-2">
                                <CalendarDays className="mr-2 h-4 w-4 opacity-70" />
                                <span className="text-xs text-muted-foreground">Joined December 2021</span>
                              </div>
                            </div>
                          </div>
                        </HoverCardContent>
                      </HoverCard>
                    </CardContent>
                  </Card>
                </div>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-bold">Dropdown Menu</h2>
                <Card>
                  <CardHeader>
                    <CardTitle>Dropdown Menu</CardTitle>
                    <CardDescription>Contextual menus for actions and navigation</CardDescription>
                  </CardHeader>
                  <CardContent className="flex flex-wrap gap-4">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="outline">Open Menu</Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent className="w-56">
                        <DropdownMenuLabel>My Account</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>
                          <User className="mr-2 h-4 w-4" />
                          <span>Profile</span>
                          <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <Settings className="mr-2 h-4 w-4" />
                          <span>Settings</span>
                          <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>
                          <LogOut className="mr-2 h-4 w-4" />
                          <span>Log out</span>
                          <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>

                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button>Actions</Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent>
                        <DropdownMenuItem>
                          <Edit className="mr-2 h-4 w-4" />
                          Edit
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <Copy className="mr-2 h-4 w-4" />
                          Duplicate
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>
                          <Share className="mr-2 h-4 w-4" />
                          Share
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem className="text-red-600">
                          <Trash className="mr-2 h-4 w-4" />
                          Delete
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </CardContent>
                </Card>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-bold">Sheet</h2>
                <Card>
                  <CardHeader>
                    <CardTitle>Sheet</CardTitle>
                    <CardDescription>Slide-in panels for mobile navigation and forms</CardDescription>
                  </CardHeader>
                  <CardContent className="flex flex-wrap gap-4">
                    <Sheet>
                      <SheetTrigger asChild>
                        <Button variant="outline">Open Sheet</Button>
                      </SheetTrigger>
                      <SheetContent>
                        <SheetHeader>
                          <SheetTitle>Edit Profile</SheetTitle>
                          <SheetDescription>
                            Make changes to your profile here. Click save when you're done.
                          </SheetDescription>
                        </SheetHeader>
                        <div className="grid gap-4 py-4">
                          <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="sheet-name" className="text-right">
                              Name
                            </Label>
                            <Input id="sheet-name" value="John Doe" className="col-span-3" />
                          </div>
                          <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="sheet-username" className="text-right">
                              Username
                            </Label>
                            <Input id="sheet-username" value="@johndoe" className="col-span-3" />
                          </div>
                        </div>
                        <SheetFooter>
                          <Button type="submit">Save changes</Button>
                        </SheetFooter>
                      </SheetContent>
                    </Sheet>

                    <Sheet>
                      <SheetTrigger asChild>
                        <Button>Side Panel</Button>
                      </SheetTrigger>
                      <SheetContent side="right" className="w-[400px] sm:w-[540px]">
                        <SheetHeader>
                          <SheetTitle>Side Panel</SheetTitle>
                          <SheetDescription>This panel slides in from the side of the screen.</SheetDescription>
                        </SheetHeader>
                        <div className="py-6">
                          <p>This is useful for mobile navigation or additional information panels.</p>
                        </div>
                      </SheetContent>
                    </Sheet>
                  </CardContent>
                </Card>
              </section>
            </TabsContent>

            {/* Data Display Section */}
            <TabsContent value="data-display" className="space-y-12">
              <section className="space-y-4">
                <h2 className="text-2xl font-bold">Tables</h2>
                <Card>
                  <CardHeader>
                    <CardTitle>Table</CardTitle>
                    <CardDescription>Tabular data display</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Table>
                      <TableCaption>A list of your recent invoices.</TableCaption>
                      <TableHeader>
                        <TableRow>
                          <TableHead className="w-[100px]">Invoice</TableHead>
                          <TableHead>Status</TableHead>
                          <TableHead>Method</TableHead>
                          <TableHead className="text-right">Amount</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {invoices.map((invoice) => (
                          <TableRow key={invoice.invoice}>
                            <TableCell className="font-medium">{invoice.invoice}</TableCell>
                            <TableCell>
                              <Badge
                                variant={
                                  invoice.paymentStatus === "Paid"
                                    ? "default"
                                    : invoice.paymentStatus === "Pending"
                                      ? "outline"
                                      : "destructive"
                                }
                              >
                                {invoice.paymentStatus}
                              </Badge>
                            </TableCell>
                            <TableCell>{invoice.paymentMethod}</TableCell>
                            <TableCell className="text-right">{invoice.totalAmount}</TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                      <TableFooter>
                        <TableRow>
                          <TableCell colSpan={3}>Total</TableCell>
                          <TableCell className="text-right">$1,750.00</TableCell>
                        </TableRow>
                      </TableFooter>
                    </Table>
                  </CardContent>
                </Card>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-bold">Accordion</h2>
                <Card>
                  <CardHeader>
                    <CardTitle>Accordion</CardTitle>
                    <CardDescription>Vertically collapsing content panels</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Accordion type="single" collapsible className="w-full">
                      <AccordionItem value="item-1">
                        <AccordionTrigger>Is BismillahCSS free to use?</AccordionTrigger>
                        <AccordionContent>
                          Yes. BismillahCSS is free and open-source. You can use it in personal and commercial projects.
                        </AccordionContent>
                      </AccordionItem>
                      <AccordionItem value="item-2">
                        <AccordionTrigger>Is BismillahCSS accessible?</AccordionTrigger>
                        <AccordionContent>
                          Yes. BismillahCSS follows WAI-ARIA guidelines and provides keyboard navigation and focus
                          management.
                        </AccordionContent>
                      </AccordionItem>
                      <AccordionItem value="item-3">
                        <AccordionTrigger>Can I use BismillahCSS with other frameworks?</AccordionTrigger>
                        <AccordionContent>
                          Yes. BismillahCSS is framework-agnostic and can be used with React, Vue, Angular, or any other
                          JavaScript framework.
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  </CardContent>
                </Card>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-bold">Collapsible</h2>
                <Card>
                  <CardHeader>
                    <CardTitle>Collapsible</CardTitle>
                    <CardDescription>An interactive component that expands/collapses content</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Collapsible className="w-full space-y-2">
                      <div className="flex items-center justify-between space-x-4 px-4">
                        <h4 className="text-sm font-semibold">@johndoe's Notifications</h4>
                        <CollapsibleTrigger asChild>
                          <Button variant="ghost" size="sm" className="w-9 p-0">
                            <ChevronDown className="h-4 w-4" />
                            <span className="sr-only">Toggle</span>
                          </Button>
                        </CollapsibleTrigger>
                      </div>
                      <div className="rounded-md border px-4 py-3 font-mono text-sm">
                        You have 3 unread notifications.
                      </div>
                      <CollapsibleContent className="space-y-2">
                        <div className="rounded-md border px-4 py-3 font-mono text-sm">
                          <div className="flex items-center gap-2">
                            <Bell className="h-4 w-4" />
                            <span>Your subscription is expiring soon.</span>
                          </div>
                        </div>
                        <div className="rounded-md border px-4 py-3 font-mono text-sm">
                          <div className="flex items-center gap-2">
                            <User className="h-4 w-4" />
                            <span>John liked your post.</span>
                          </div>
                        </div>
                        <div className="rounded-md border px-4 py-3 font-mono text-sm">
                          <div className="flex items-center gap-2">
                            <Mail className="h-4 w-4" />
                            <span>You have a new message.</span>
                          </div>
                        </div>
                      </CollapsibleContent>
                    </Collapsible>
                  </CardContent>
                </Card>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-bold">Badges & Avatars</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Badges</CardTitle>
                      <CardDescription>Small status descriptors</CardDescription>
                    </CardHeader>
                    <CardContent className="flex flex-wrap gap-4">
                      <Badge>Default</Badge>
                      <Badge variant="secondary">Secondary</Badge>
                      <Badge variant="outline">Outline</Badge>
                      <Badge variant="destructive">Destructive</Badge>
                      <Badge className="bg-green-500 hover:bg-green-600">Success</Badge>
                      <Badge className="bg-yellow-500 hover:bg-yellow-600">Warning</Badge>
                      <Badge className="bg-blue-500 hover:bg-blue-600">Info</Badge>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Avatars</CardTitle>
                      <CardDescription>User profile pictures or placeholders</CardDescription>
                    </CardHeader>
                    <CardContent className="flex flex-wrap gap-4">
                      <Avatar>
                        <AvatarImage src="/placeholder.svg?height=40&width=40" alt="Avatar" />
                        <AvatarFallback>JD</AvatarFallback>
                      </Avatar>
                      <Avatar>
                        <AvatarImage src="/placeholder.svg?height=40&width=40" alt="Avatar" />
                        <AvatarFallback>SA</AvatarFallback>
                      </Avatar>
                      <Avatar>
                        <AvatarFallback>CN</AvatarFallback>
                      </Avatar>
                      <Avatar>
                        <AvatarFallback>
                          <User className="h-4 w-4" />
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex -space-x-2">
                        <Avatar className="border-2 border-background">
                          <AvatarFallback>JD</AvatarFallback>
                        </Avatar>
                        <Avatar className="border-2 border-background">
                          <AvatarFallback>SA</AvatarFallback>
                        </Avatar>
                        <Avatar className="border-2 border-background">
                          <AvatarFallback>+2</AvatarFallback>
                        </Avatar>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </section>
            </TabsContent>

            {/* Layout Section */}
            <TabsContent value="layout" className="space-y-12">
              <section className="space-y-4">
                <h2 className="text-2xl font-bold">Grid Layout</h2>
                <Card>
                  <CardHeader>
                    <CardTitle>Grid Layout</CardTitle>
                    <CardDescription>Two-dimensional grid-based layout system</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="bg-primary/10 p-4 rounded-md text-center">Column 1</div>
                      <div className="bg-primary/10 p-4 rounded-md text-center">Column 2</div>
                      <div className="bg-primary/10 p-4 rounded-md text-center">Column 3</div>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
                      <div className="bg-primary/10 p-4 rounded-md text-center">Column 1</div>
                      <div className="bg-primary/10 p-4 rounded-md text-center">Column 2</div>
                      <div className="bg-primary/10 p-4 rounded-md text-center">Column 3</div>
                      <div className="bg-primary/10 p-4 rounded-md text-center">Column 4</div>
                    </div>
                    <div className="grid grid-cols-3 gap-4 mt-4">
                      <div className="bg-primary/10 p-4 rounded-md text-center col-span-2">Span 2</div>
                      <div className="bg-primary/10 p-4 rounded-md text-center">Column 3</div>
                    </div>
                  </CardContent>
                </Card>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-bold">Flex Layout</h2>
                <Card>
                  <CardHeader>
                    <CardTitle>Flex Layout</CardTitle>
                    <CardDescription>One-dimensional flexible layout system</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <p className="text-sm text-muted-foreground mb-2">Flex Row (default)</p>
                      <div className="flex gap-4">
                        <div className="bg-primary/10 p-4 rounded-md">Item 1</div>
                        <div className="bg-primary/10 p-4 rounded-md">Item 2</div>
                        <div className="bg-primary/10 p-4 rounded-md">Item 3</div>
                      </div>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-2">Flex Column</p>
                      <div className="flex flex-col gap-4">
                        <div className="bg-primary/10 p-4 rounded-md">Item 1</div>
                        <div className="bg-primary/10 p-4 rounded-md">Item 2</div>
                        <div className="bg-primary/10 p-4 rounded-md">Item 3</div>
                      </div>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-2">Justify Content</p>
                      <div className="flex justify-between">
                        <div className="bg-primary/10 p-4 rounded-md">Left</div>
                        <div className="bg-primary/10 p-4 rounded-md">Center</div>
                        <div className="bg-primary/10 p-4 rounded-md">Right</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-bold">Responsive Layout</h2>
                <Card>
                  <CardHeader>
                    <CardTitle>Responsive Layout</CardTitle>
                    <CardDescription>Layouts that adapt to different screen sizes</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <p className="text-sm text-muted-foreground">
                        This layout changes from 1 column on mobile to 2 columns on tablet and 4 columns on desktop
                      </p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                        <div className="bg-primary/10 p-4 rounded-md text-center">Item 1</div>
                        <div className="bg-primary/10 p-4 rounded-md text-center">Item 2</div>
                        <div className="bg-primary/10 p-4 rounded-md text-center">Item 3</div>
                        <div className="bg-primary/10 p-4 rounded-md text-center">Item 4</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-bold">Aspect Ratio</h2>
                <Card>
                  <CardHeader>
                    <CardTitle>Aspect Ratio</CardTitle>
                    <CardDescription>Maintain consistent width-to-height ratios</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div>
                        <p className="text-sm text-muted-foreground mb-2">1:1 (Square)</p>
                        <div className="relative aspect-square bg-primary/10 rounded-md">
                          <div className="absolute inset-0 flex items-center justify-center">1:1</div>
                        </div>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground mb-2">16:9 (Widescreen)</p>
                        <div className="relative aspect-video bg-primary/10 rounded-md">
                          <div className="absolute inset-0 flex items-center justify-center">16:9</div>
                        </div>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground mb-2">4:3 (Standard)</p>
                        <div className="relative aspect-[4/3] bg-primary/10 rounded-md">
                          <div className="absolute inset-0 flex items-center justify-center">4:3</div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </section>
            </TabsContent>

            {/* Ultra Components Section */}
            <TabsContent value="ultra" className="space-y-12">
              <section className="space-y-4">
                <h2 className="text-2xl font-bold">Ultra Primitives</h2>
                <div className="grid grid-cols-1 gap-12">
                  <Card>
                    <CardHeader>
                      <CardTitle>Hero Ultra</CardTitle>
                      <CardDescription>Premium immersive hero section</CardDescription>
                    </CardHeader>
                    <CardContent className="p-0 border rounded-md overflow-hidden bg-black">
                      <HeroUltra />
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Navbar Ultra</CardTitle>
                      <CardDescription>Glassy futuristic navigation</CardDescription>
                    </CardHeader>
                    <CardContent className="p-4 bg-slate-900">
                      <NavbarUltra />
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Pricing Ultra</CardTitle>
                      <CardDescription>Neon-accented conversion cards</CardDescription>
                    </CardHeader>
                    <CardContent className="p-0 border rounded-md overflow-hidden bg-[#050507]">
                      <PricingUltra />
                    </CardContent>
                  </Card>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <Card>
                      <CardHeader>
                        <CardTitle>Sidebar Ultra</CardTitle>
                        <CardDescription>Command center lateral nav</CardDescription>
                      </CardHeader>
                      <CardContent className="p-4 bg-slate-950 flex justify-center">
                        <SidebarUltra />
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader>
                        <CardTitle>Glow Buttons Ultra</CardTitle>
                        <CardDescription>Intense neon action states</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <GlowButtonsUltra />
                      </CardContent>
                    </Card>
                  </div>

                  <Card>
                    <CardHeader>
                      <CardTitle>Dashboard Ultra</CardTitle>
                      <CardDescription>Full spatial application layout</CardDescription>
                    </CardHeader>
                    <CardContent className="p-0 border rounded-md overflow-hidden">
                      <DashboardUltra />
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Table Ultra</CardTitle>
                      <CardDescription>Polished data grid for metrics</CardDescription>
                    </CardHeader>
                    <CardContent className="p-4 bg-black">
                      <TableUltra />
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Feature Cards Ultra</CardTitle>
                      <CardDescription>Spatial logic content grid</CardDescription>
                    </CardHeader>
                    <CardContent className="p-0">
                      <FeatureCardsUltra />
                    </CardContent>
                  </Card>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <Card>
                      <CardHeader>
                        <CardTitle>Glass Buttons & Badges</CardTitle>
                        <CardDescription>Backdrop-blur actions and neon indicators</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <GlassButtonUltra />
                        <BadgeNeonUltra />
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader>
                        <CardTitle>Cyber Inputs</CardTitle>
                        <CardDescription>Neural identification fields</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <CyberInputUltra />
                      </CardContent>
                    </Card>
                  </div>

                  <Card>
                    <CardHeader>
                      <CardTitle>Ultra Gradient Cards</CardTitle>
                      <CardDescription>Liquid border depth effect</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <TableUltra />
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Sidebar Architecture</CardTitle>
                      <CardDescription>Extraordinary navigation primitive</CardDescription>
                    </CardHeader>
                    <CardContent className="p-0 border rounded-md overflow-hidden">
                      <SidebarUltra />
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>System Dashboard</CardTitle>
                      <CardDescription>Extraordinary command center layout</CardDescription>
                    </CardHeader>
                    <CardContent className="p-0 border rounded-md overflow-hidden">
                      <DashboardUltra />
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Glassmorphic Buttons & Interactive PRs</CardTitle>
                      <CardDescription>Extraordinary animated ambient lighting environment</CardDescription>
                    </CardHeader>
                    <CardContent className="p-0 border rounded-md overflow-hidden bg-black">
                      <AuroraBgElite />
                    </CardContent>
                  </Card>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <Card>
                      <CardHeader>
                        <CardTitle>Cyber Tooltips & Labels</CardTitle>
                        <CardDescription>Bismillah Extraordinary floating information nodes</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <TooltipCyberElite />
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader>
                        <CardTitle>Elite Inputs with Animations</CardTitle>
                        <CardDescription>Extraordinary interactive border logic</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <InputEliteUltra />
                      </CardContent>
                    </Card>
                  </div>

                  <Card>
                    <CardHeader>
                      <CardTitle>Floating Glass Cards (Defying Gravity)</CardTitle>
                      <CardDescription>Extraordinary animated atmospheric levitation primitives</CardDescription>
                    </CardHeader>
                    <CardContent className="p-0 bg-[#050507]">
                      <CardFloatElite />
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Royal Majesty (Imperial Tier)</CardTitle>
                      <CardDescription>Extraordinary gold-light architecture with silk text</CardDescription>
                    </CardHeader>
                    <CardContent className="p-0 bg-black overflow-hidden border-yellow-500/20">
                      <CardRoyalElite />
                      <div className="p-8 border-t border-yellow-500/10">
                        <RoyalSilkButton />
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </section>
            </TabsContent>

            {/* Special Effects Section */}
            <TabsContent value="special" className="space-y-12">
              <section className="space-y-4">
                <h2 className="text-2xl font-bold">Animated Gradient Text</h2>
                <Card>
                  <CardHeader>
                    <CardTitle>Animated Gradient Text</CardTitle>
                    <CardDescription>Text with animated gradient effects</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="text-center">
                      <h3 className="text-3xl font-bold">
                        <AnimatedGradientText>BismillahCSS</AnimatedGradientText>
                      </h3>
                    </div>
                    <div className="text-center">
                      <h3 className="text-2xl font-bold">
                        <AnimatedGradientText delay={0.2}>Beautiful Typography</AnimatedGradientText>
                      </h3>
                    </div>
                    <div className="text-center">
                      <h3 className="text-xl font-bold">
                        <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                          Static Gradient Text
                        </span>
                      </h3>
                    </div>
                  </CardContent>
                </Card>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-bold">Futuristic Background</h2>
                <Card>
                  <CardHeader>
                    <CardTitle>Futuristic Background</CardTitle>
                    <CardDescription>Dynamic background effects</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="relative h-40 rounded-md overflow-hidden">
                      <FuturisticBackground variant="grid" intensity="medium" />
                      <div className="relative z-10 flex items-center justify-center h-full">
                        <h3 className="text-xl font-bold">Grid Background</h3>
                      </div>
                    </div>
                    <div className="relative h-40 rounded-md overflow-hidden">
                      <FuturisticBackground variant="dots" intensity="medium" />
                      <div className="relative z-10 flex items-center justify-center h-full">
                        <h3 className="text-xl font-bold">Dots Background</h3>
                      </div>
                    </div>
                    <div className="relative h-40 rounded-md overflow-hidden">
                      <FuturisticBackground variant="waves" intensity="medium" />
                      <div className="relative z-10 flex items-center justify-center h-full">
                        <h3 className="text-xl font-bold">Waves Background</h3>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-bold">Motion Effects</h2>
                <Card>
                  <CardHeader>
                    <CardTitle>Motion Effects</CardTitle>
                    <CardDescription>Animations and transitions</CardDescription>
                  </CardHeader>
                  <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <h3 className="text-lg font-medium">Hover Effects</h3>
                      <div className="grid grid-cols-2 gap-4">
                        <motion.div
                          className="bg-primary/10 p-4 rounded-md text-center cursor-pointer"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          Scale on Hover
                        </motion.div>
                        <motion.div
                          className="bg-primary/10 p-4 rounded-md text-center cursor-pointer"
                          whileHover={{ rotate: 5 }}
                          whileTap={{ rotate: -5 }}
                        >
                          Rotate on Hover
                        </motion.div>
                        <motion.div
                          className="bg-primary/10 p-4 rounded-md text-center cursor-pointer"
                          whileHover={{ y: -5, boxShadow: "0 10px 25px rgba(0, 0, 0, 0.1)" }}
                        >
                          Lift on Hover
                        </motion.div>
                        <motion.div
                          className="bg-primary/10 p-4 rounded-md text-center cursor-pointer"
                          whileHover={{ backgroundColor: "rgba(99, 102, 241, 0.4)" }}
                        >
                          Color on Hover
                        </motion.div>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <h3 className="text-lg font-medium">Animations</h3>
                      <div className="grid grid-cols-2 gap-4">
                        <motion.div
                          className="bg-primary/10 p-4 rounded-md text-center"
                          animate={{ opacity: [0, 1, 0] }}
                          transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2 }}
                        >
                          Pulse
                        </motion.div>
                        <motion.div
                          className="bg-primary/10 p-4 rounded-md text-center"
                          animate={{ y: [0, -10, 0] }}
                          transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2 }}
                        >
                          Bounce
                        </motion.div>
                        <motion.div
                          className="bg-primary/10 p-4 rounded-md text-center"
                          animate={{ rotate: [0, 360] }}
                          transition={{ repeat: Number.POSITIVE_INFINITY, duration: 3, ease: "linear" }}
                        >
                          Rotate
                        </motion.div>
                        <motion.div
                          className="bg-primary/10 p-4 rounded-md text-center"
                          animate={{ scale: [1, 1.1, 1] }}
                          transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2 }}
                        >
                          Breathe
                        </motion.div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-bold">Glassmorphism</h2>
                <Card>
                  <CardHeader>
                    <CardTitle>Glassmorphism</CardTitle>
                    <CardDescription>Frosted glass effect for UI elements</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="relative h-60 rounded-lg overflow-hidden bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
                      <div className="absolute inset-0 flex items-center justify-center p-6">
                        <div className="bg-white/20 backdrop-blur-lg border border-white/30 rounded-lg p-6 w-full max-w-md">
                          <h3 className="text-xl font-bold text-white mb-2">Glassmorphism Card</h3>
                          <p className="text-white/80">
                            This card demonstrates the glassmorphism effect with backdrop blur and semi-transparent
                            background.
                          </p>
                          <div className="mt-4">
                            <Button className="bg-white/20 hover:bg-white/30 text-white">Learn More</Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </section>
            </TabsContent>
          </Tabs>

          <div className="mt-16 text-center">
            <GlowButton asChild size="lg">
              <Link href="/docs">View Documentation</Link>
            </GlowButton>
          </div>
        </div>
      </div>
    </PageTransition>
  )
}

function CalendarDays(props: React.ComponentProps<"svg">) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
      <line x1="16" x2="16" y1="2" y2="6" />
      <line x1="8" x2="8" y1="2" y2="6" />
      <line x1="3" x2="21" y1="10" y2="10" />
      <path d="M8 14h.01" />
      <path d="M12 14h.01" />
      <path d="M16 14h.01" />
      <path d="M8 18h.01" />
      <path d="M12 18h.01" />
      <path d="M16 18h.01" />
    </svg>
  )
}

function LogOut(props: React.ComponentProps<"svg">) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
      <polyline points="16 17 21 12 16 7" />
      <line x1="21" x2="9" y1="12" y2="12" />
    </svg>
  )
}

function Share(props: React.ComponentProps<"svg">) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
      <polyline points="16 6 12 2 8 6" />
      <line x1="12" x2="12" y1="2" y2="15" />
    </svg>
  )
}

