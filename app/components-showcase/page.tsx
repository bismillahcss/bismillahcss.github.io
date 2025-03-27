// "use client"

// import { useState } from "react"
// import { motion } from "framer-motion"
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
// import { PageTransition } from "@/components/page-transition"
// import { FuturisticBackground } from "@/components/futuristic-background"
// import { AnimatedGradientText } from "@/components/animated-gradient-text"
// import { GlowButton } from "@/components/glow-button"
// import { Button } from "@/components/ui/button"
// import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
// import { Input } from "@/components/ui/input"
// import { Label } from "@/components/ui/label"
// import { Checkbox } from "@/components/ui/checkbox"
// import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
// import { Slider } from "@/components/ui/slider"
// import { Switch } from "@/components/ui/switch"
// import { Textarea } from "@/components/ui/textarea"
// import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
// import { useToast } from "@/hooks/use-toast"
// import {
//   AlertCircle,
//   CheckCircle2,
//   Info,
//   Download,
//   Search,
//   Settings,
//   User,
//   Mail,
//   Home,
//   Heart,
//   Trash,
//   Plus,
//   ArrowRight,
//   ArrowLeft,
// } from "lucide-react"
// import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
// import {
//   Breadcrumb,
//   BreadcrumbItem,
//   BreadcrumbLink,
//   BreadcrumbList,
//   BreadcrumbSeparator,
// } from "@/components/ui/breadcrumb"
// import {
//   NavigationMenu,
//   NavigationMenuContent,
//   NavigationMenuItem,
//   NavigationMenuLink,
//   NavigationMenuList,
//   NavigationMenuTrigger,
// } from "@/components/ui/navigation-menu"
// import { Progress } from "@/components/ui/progress"
// import Link from "next/link"

// export default function ComponentsShowcasePage() {
//   const [activeCategory, setActiveCategory] = useState("buttons")
//   const { toast } = useToast()
//   const [progress, setProgress] = useState(45)
//   const [isOpen, setIsOpen] = useState(false)
//   const [commandOpen, setCommandOpen] = useState(false)

//   const categories = [
//     { id: "buttons", name: "Buttons" },
//     { id: "cards", name: "Cards" },
//     { id: "inputs", name: "Inputs & Forms" },
//     { id: "feedback", name: "Feedback" },
//     { id: "navigation", name: "Navigation" },
//     { id: "overlays", name: "Overlays" },
//     { id: "data-display", name: "Data Display" },
//     { id: "layout", name: "Layout" },
//     { id: "special", name: "Special Effects" },
//   ]

//   // Sample data for tables
//   const invoices = [
//     {
//       invoice: "INV001",
//       paymentStatus: "Paid",
//       totalAmount: "$250.00",
//       paymentMethod: "Credit Card",
//     },
//     {
//       invoice: "INV002",
//       paymentStatus: "Pending",
//       totalAmount: "$150.00",
//       paymentMethod: "PayPal",
//     },
//     {
//       invoice: "INV003",
//       paymentStatus: "Unpaid",
//       totalAmount: "$350.00",
//       paymentMethod: "Bank Transfer",
//     },
//     {
//       invoice: "INV004",
//       paymentStatus: "Paid",
//       totalAmount: "$450.00",
//       paymentMethod: "Credit Card",
//     },
//     {
//       invoice: "INV005",
//       paymentStatus: "Paid",
//       totalAmount: "$550.00",
//       paymentMethod: "PayPal",
//     },
//   ]

//   return (
//     <PageTransition>
//       <div className="container py-10 relative">
//         <FuturisticBackground variant="grid" intensity="light" />
//         <div className="relative z-10">
//           <div className="mb-10 text-center">
//             <div className="flex flex-col items-center gap-4">
//               <img src="/images/bismillah-logo.png" alt="BismillahCSS Logo" className="h-16 w-auto" />
//               <h1 className="text-4xl font-bold tracking-tight">
//                 <AnimatedGradientText>BismillahCSS Components</AnimatedGradientText>
//               </h1>
//             </div>
//             <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
//               A comprehensive showcase of all components available in the BismillahCSS framework
//             </p>
//           </div>

//           <Tabs defaultValue="buttons" value={activeCategory} onValueChange={setActiveCategory} className="w-full">
//             <div className="mb-8 overflow-x-auto">
//               <TabsList className="inline-flex w-max p-1">
//                 {categories.map((category) => (
//                   <TabsTrigger key={category.id} value={category.id} className="px-4 py-2">
//                     {category.name}
//                   </TabsTrigger>
//                 ))}
//               </TabsList>
//             </div>

//             {/* Buttons Section */}
//             <TabsContent value="buttons" className="space-y-12">
//               <section className="space-y-4">
//                 <h2 className="text-2xl font-bold">Standard Buttons</h2>
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//                   <Card>
//                     <CardHeader>
//                       <CardTitle>Button Variants</CardTitle>
//                       <CardDescription>Different button styles for various contexts</CardDescription>
//                     </CardHeader>
//                     <CardContent className="flex flex-wrap gap-4">
//                       <Button variant="default">Default</Button>
//                       <Button variant="destructive">Destructive</Button>
//                       <Button variant="outline">Outline</Button>
//                       <Button variant="secondary">Secondary</Button>
//                       <Button variant="ghost">Ghost</Button>
//                       <Button variant="link">Link</Button>
//                     </CardContent>
//                   </Card>

//                   <Card>
//                     <CardHeader>
//                       <CardTitle>Button Sizes</CardTitle>
//                       <CardDescription>Buttons in different sizes for various contexts</CardDescription>
//                     </CardHeader>
//                     <CardContent className="flex flex-wrap items-center gap-4">
//                       <Button size="sm">Small</Button>
//                       <Button size="default">Default</Button>
//                       <Button size="lg">Large</Button>
//                       <Button size="icon" className="ml-4">
//                         <Plus className="h-4 w-4" />
//                       </Button>
//                     </CardContent>
//                   </Card>
//                 </div>
//               </section>

//               <section className="space-y-4">
//                 <h2 className="text-2xl font-bold">Button States</h2>
//                 <Card>
//                   <CardHeader>
//                     <CardTitle>Button States</CardTitle>
//                     <CardDescription>Buttons in different states</CardDescription>
//                   </CardHeader>
//                   <CardContent className="flex flex-wrap gap-4">
//                     <Button>Default</Button>
//                     <Button disabled>Disabled</Button>
//                     <Button variant="outline" className="border-dashed">
//                       Dashed
//                     </Button>
//                     <Button className="bg-primary/50 hover:bg-primary/70">Muted</Button>
//                     <Button className="animate-pulse">Animated</Button>
//                   </CardContent>
//                 </Card>
//               </section>

//               <section className="space-y-4">
//                 <h2 className="text-2xl font-bold">Button with Icons</h2>
//                 <Card>
//                   <CardHeader>
//                     <CardTitle>Button with Icons</CardTitle>
//                     <CardDescription>Buttons with icons for enhanced visual cues</CardDescription>
//                   </CardHeader>
//                   <CardContent className="flex flex-wrap gap-4">
//                     <Button>
//                       <Mail className="mr-2 h-4 w-4" /> Email
//                     </Button>
//                     <Button variant="outline">
//                       <Download className="mr-2 h-4 w-4" /> Download
//                     </Button>
//                     <Button variant="secondary">
//                       Settings <Settings className="ml-2 h-4 w-4" />
//                     </Button>
//                     <Button variant="ghost">
//                       <Heart className="mr-2 h-4 w-4" /> Like
//                     </Button>
//                     <Button variant="destructive">
//                       <Trash className="mr-2 h-4 w-4" /> Delete
//                     </Button>
//                   </CardContent>
//                 </Card>
//               </section>

//               <section className="space-y-4">
//                 <h2 className="text-2xl font-bold">Special Effect Buttons</h2>
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//                   <Card>
//                     <CardHeader>
//                       <CardTitle>Glow Buttons</CardTitle>
//                       <CardDescription>Buttons with glow effects</CardDescription>
//                     </CardHeader>
//                     <CardContent className="flex flex-wrap gap-4">
//                       <GlowButton>Glow Default</GlowButton>
//                       <GlowButton variant="outline">Glow Outline</GlowButton>
//                       <GlowButton glowIntensity="strong">Strong Glow</GlowButton>
//                     </CardContent>
//                   </Card>

//                   <Card>
//                     <CardHeader>
//                       <CardTitle>Animated Buttons</CardTitle>
//                       <CardDescription>Buttons with animations</CardDescription>
//                     </CardHeader>
//                     <CardContent className="flex flex-wrap gap-4">
//                       <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
//                         <Button>Scale on Hover</Button>
//                       </motion.div>
//                       <motion.div whileHover={{ rotate: 5 }} whileTap={{ rotate: -5 }}>
//                         <Button variant="outline">Rotate on Hover</Button>
//                       </motion.div>
//                       <motion.div
//                         whileHover={{
//                           boxShadow: "0 0 15px rgba(99, 102, 241, 0.8)",
//                           y: -5,
//                         }}
//                       >
//                         <Button variant="secondary">Lift on Hover</Button>
//                       </motion.div>
//                     </CardContent>
//                   </Card>
//                 </div>
//               </section>

//               <section className="space-y-4">
//                 <h2 className="text-2xl font-bold">Button Groups</h2>
//                 <Card>
//                   <CardHeader>
//                     <CardTitle>Button Groups</CardTitle>
//                     <CardDescription>Groups of related buttons</CardDescription>
//                   </CardHeader>
//                   <CardContent className="space-y-4">
//                     <div className="flex flex-wrap">
//                       <Button className="rounded-r-none">Left</Button>
//                       <Button className="rounded-none border-x-0">Middle</Button>
//                       <Button className="rounded-l-none">Right</Button>
//                     </div>
//                     <div className="flex flex-wrap">
//                       <Button variant="outline" className="rounded-r-none">
//                         <ArrowLeft className="h-4 w-4" />
//                       </Button>
//                       <Button variant="outline" className="rounded-none border-x-0">
//                         <Home className="h-4 w-4" />
//                       </Button>
//                       <Button variant="outline" className="rounded-l-none">
//                         <ArrowRight className="h-4 w-4" />
//                       </Button>
//                     </div>
//                   </CardContent>
//                 </Card>
//               </section>
//             </TabsContent>

//             {/* Cards Section */}
//             <TabsContent value="cards" className="space-y-12">
//               <section className="space-y-4">
//                 <h2 className="text-2xl font-bold">Basic Cards</h2>
//                 <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//                   <Card>
//                     <CardHeader>
//                       <CardTitle>Simple Card</CardTitle>
//                       <CardDescription>A basic card with title and description</CardDescription>
//                     </CardHeader>
//                     <CardContent>
//                       <p>This is a simple card with some content. Cards are useful for organizing information.</p>
//                     </CardContent>
//                   </Card>

//                   <Card>
//                     <CardHeader>
//                       <CardTitle>Card with Footer</CardTitle>
//                       <CardDescription>A card with actions in the footer</CardDescription>
//                     </CardHeader>
//                     <CardContent>
//                       <p>This card includes a footer with action buttons.</p>
//                     </CardContent>
//                     <CardFooter className="flex justify-between">
//                       <Button variant="outline">Cancel</Button>
//                       <Button>Save</Button>
//                     </CardFooter>
//                   </Card>

//                   <Card>
//                     <CardHeader>
//                       <CardTitle>Card with Image</CardTitle>
//                       <CardDescription>A card with an image</CardDescription>
//                     </CardHeader>
//                     <CardContent className="p-0">
//                       <img
//                         src="/placeholder.svg?height=200&width=400"
//                         alt="Placeholder"
//                         className="w-full h-40 object-cover"
//                       />
//                       <div className="p-6">
//                         <p>This card includes an image at the top.</p>
//                       </div>
//                     </CardContent>
//                   </Card>
//                 </div>
//               </section>

//               <section className="space-y-4">
//                 <h2 className="text-2xl font-bold">Interactive Cards</h2>
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                   <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
//                     <Card className="cursor-pointer">
//                       <CardHeader>
//                         <CardTitle>Hover Card</CardTitle>
//                         <CardDescription>This card scales on hover</CardDescription>
//                       </CardHeader>
//                       <CardContent>
//                         <p>Hover over this card to see it scale up slightly.</p>
//                       </CardContent>
//                     </Card>
//                   </motion.div>

//                   <motion.div
//                     whileHover={{
//                       y: -10,
//                       boxShadow: "0 15px 30px rgba(0, 0, 0, 0.2)",
//                     }}
//                   >
//                     <Card className="cursor-pointer">
//                       <CardHeader>
//                         <CardTitle>Lift Card</CardTitle>
//                         <CardDescription>This card lifts on hover</CardDescription>
//                       </CardHeader>
//                       <CardContent>
//                         <p>Hover over this card to see it lift up with a shadow.</p>
//                       </CardContent>
//                     </Card>
//                   </motion.div>
//                 </div>
//               </section>

//               <section className="space-y-4">
//                 <h2 className="text-2xl font-bold">Special Effect Cards</h2>
//                 <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//                   <Card className="bg-white/20 backdrop-blur-md border border-white/30">
//                     <CardHeader>
//                       <CardTitle>Glass Card</CardTitle>
//                       <CardDescription>A card with glassmorphism effect</CardDescription>
//                     </CardHeader>
//                     <CardContent>
//                       <p>This card has a glassmorphism effect with backdrop blur.</p>
//                     </CardContent>
//                   </Card>

//                   <Card className="bg-gradient-to-r from-blue-500 to-purple-500 text-white">
//                     <CardHeader>
//                       <CardTitle>Gradient Card</CardTitle>
//                       <CardDescription className="text-white/80">A card with gradient background</CardDescription>
//                     </CardHeader>
//                     <CardContent>
//                       <p>This card has a beautiful gradient background.</p>
//                     </CardContent>
//                   </Card>

//                   <div className="relative h-[250px] perspective-[1000px] group">
//                     <div className="absolute inset-0 transition-all duration-500 transform-style-preserve-3d group-hover:rotate-y-180">
//                       <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg p-6 text-white backface-hidden">
//                         <h3 className="text-lg font-semibold mb-2">Flip Card Front</h3>
//                         <p>Hover to see the back side</p>
//                       </div>
//                       <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg p-6 text-white backface-hidden rotate-y-180">
//                         <h3 className="text-lg font-semibold mb-2">Flip Card Back</h3>
//                         <p>This is the back side of the card</p>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </section>

//               {/* Inputs & Forms Section */}
//               <TabsContent value="inputs" className="space-y-12">
//                 <section className="space-y-4">
//                   <h2 className="text-2xl font-bold">Basic Inputs</h2>
//                   <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//                     <Card>
//                       <CardHeader>
//                         <CardTitle>Text Inputs</CardTitle>
//                         <CardDescription>Basic text input fields</CardDescription>
//                       </CardHeader>
//                       <CardContent className="space-y-4">
//                         <div className="grid w-full items-center gap-1.5">
//                           <Label htmlFor="email">Email</Label>
//                           <Input type="email" id="email" placeholder="Email" />
//                         </div>
//                         <div className="grid w-full items-center gap-1.5">
//                           <Label htmlFor="password">Password</Label>
//                           <Input type="password" id="password" placeholder="Password" />
//                         </div>
//                         <div className="grid w-full items-center gap-1.5">
//                           <Label htmlFor="disabled">Disabled</Label>
//                           <Input type="text" id="disabled" placeholder="Disabled" disabled />
//                         </div>
//                       </CardContent>
//                     </Card>

//                     <Card>
//                       <CardHeader>
//                         <CardTitle>Input with Icons</CardTitle>
//                         <CardDescription>Text inputs with icons</CardDescription>
//                       </CardHeader>
//                       <CardContent className="space-y-4">
//                         <div className="relative">
//                           <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
//                           <Input type="text" placeholder="Search..." className="pl-8" />
//                         </div>
//                         <div className="relative">
//                           <Input type="text" placeholder="Username" className="pl-8" />
//                           <User className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
//                         </div>
//                         <div className="relative">
//                           <Input type="email" placeholder="Email" className="pr-8" />
//                           <Mail className="absolute right-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
//                         </div>
//                       </CardContent>
//                     </Card>
//                   </div>
//                 </section>

//                 <section className="space-y-4">
//                   <h2 className="text-2xl font-bold">Selection Controls</h2>
//                   <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//                     <Card>
//                       <CardHeader>
//                         <CardTitle>Checkbox</CardTitle>
//                         <CardDescription>Checkbox selection controls</CardDescription>
//                       </CardHeader>
//                       <CardContent className="space-y-4">
//                         <div className="flex items-center space-x-2">
//                           <Checkbox id="terms" />
//                           <Label htmlFor="terms">Accept terms and conditions</Label>
//                         </div>
//                         <div className="flex items-center space-x-2">
//                           <Checkbox id="newsletter" defaultChecked />
//                           <Label htmlFor="newsletter">Subscribe to newsletter</Label>
//                         </div>
//                         <div className="flex items-center space-x-2">
//                           <Checkbox id="disabled" disabled />
//                           <Label htmlFor="disabled" className="text-muted-foreground">
//                             Disabled option
//                           </Label>
//                         </div>
//                       </CardContent>
//                     </Card>

//                     <Card>
//                       <CardHeader>
//                         <CardTitle>Radio Group</CardTitle>
//                         <CardDescription>Radio button selection controls</CardDescription>
//                       </CardHeader>
//                       <CardContent className="space-y-4">
//                         <RadioGroup defaultValue="option-one">
//                           <div className="flex items-center space-x-2">
//                             <RadioGroupItem value="option-one" id="option-one" />
//                             <Label htmlFor="option-one">Option One</Label>
//                           </div>
//                           <div className="flex items-center space-x-2">
//                             <RadioGroupItem value="option-two" id="option-two" />
//                             <Label htmlFor="option-two">Option Two</Label>
//                           </div>
//                           <div className="flex items-center space-x-2">
//                             <RadioGroupItem value="option-three" id="option-three" disabled />
//                             <Label htmlFor="option-three" className="text-muted-foreground">
//                               Option Three (Disabled)
//                             </Label>
//                           </div>
//                         </RadioGroup>
//                       </CardContent>
//                     </Card>

//                     <Card>
//                       <CardHeader>
//                         <CardTitle>Switch</CardTitle>
//                         <CardDescription>Toggle switch controls</CardDescription>
//                       </CardHeader>
//                       <CardContent className="space-y-4">
//                         <div className="flex items-center space-x-2">
//                           <Switch id="airplane-mode" />
//                           <Label htmlFor="airplane-mode">Airplane Mode</Label>
//                         </div>
//                         <div className="flex items-center space-x-2">
//                           <Switch id="wifi" defaultChecked />
//                           <Label htmlFor="wifi">WiFi</Label>
//                         </div>
//                         <div className="flex items-center space-x-2">
//                           <Switch id="bluetooth" disabled />
//                           <Label htmlFor="bluetooth" className="text-muted-foreground">
//                             Bluetooth (Disabled)
//                           </Label>
//                         </div>
//                       </CardContent>
//                     </Card>
//                   </div>
//                 </section>

//                 <section className="space-y-4">
//                   <h2 className="text-2xl font-bold">Advanced Inputs</h2>
//                   <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                     <Card>
//                       <CardHeader>
//                         <CardTitle>Select</CardTitle>
//                         <CardDescription>Dropdown selection controls</CardDescription>
//                       </CardHeader>
//                       <CardContent className="space-y-4">
//                         <div className="grid w-full items-center gap-1.5">
//                           <Label htmlFor="framework">Framework</Label>
//                           <Select>
//                             <SelectTrigger>
//                               <SelectValue placeholder="Select a framework" />
//                             </SelectTrigger>
//                             <SelectContent>
//                               <SelectItem value="next">Next.js</SelectItem>
//                               <SelectItem value="react">React</SelectItem>
//                               <SelectItem value="vue">Vue</SelectItem>
//                               <SelectItem value="angular">Angular</SelectItem>
//                               <SelectItem value="svelte">Svelte</SelectItem>
//                             </SelectContent>
//                           </Select>
//                         </div>
//                       </CardContent>
//                     </Card>

//                     <Card>
//                       <CardHeader>
//                         <CardTitle>Slider</CardTitle>
//                         <CardDescription>Range slider controls</CardDescription>
//                       </CardHeader>
//                       <CardContent className="space-y-4">
//                         <div className="grid w-full items-center gap-1.5">
//                           <div className="flex justify-between">
//                             <Label htmlFor="volume">Volume: {progress}%</Label>
//                           </div>
//                           <Slider
//                             id="volume"
//                             defaultValue={[45]}
//                             max={100}
//                             step={1}
//                             onValueChange={(value) => setProgress(value[0])}
//                           />
//                         </div>
//                       </CardContent>
//                     </Card>
//                   </div>
//                 </section>

//                 <section className="space-y-4">
//                   <h2 className="text-2xl font-bold">Form Layout</h2>
//                   <Card>
//                     <CardHeader>
//                       <CardTitle>Contact Form</CardTitle>
//                       <CardDescription>A complete form example</CardDescription>
//                     </CardHeader>
//                     <CardContent className="space-y-4">
//                       <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                         <div className="grid w-full items-center gap-1.5">
//                           <Label htmlFor="first-name">First Name</Label>
//                           <Input type="text" id="first-name" placeholder="First Name" />
//                         </div>
//                         <div className="grid w-full items-center gap-1.5">
//                           <Label htmlFor="last-name">Last Name</Label>
//                           <Input type="text" id="last-name" placeholder="Last Name" />
//                         </div>
//                       </div>
//                       <div className="grid w-full items-center gap-1.5">
//                         <Label htmlFor="email-address">Email</Label>
//                         <Input type="email" id="email-address" placeholder="Email Address" />
//                       </div>
//                       <div className="grid w-full items-center gap-1.5">
//                         <Label htmlFor="message">Message</Label>
//                         <Textarea id="message" placeholder="Your message" />
//                       </div>
//                       <div className="flex items-center space-x-2">
//                         <Checkbox id="marketing" />
//                         <Label htmlFor="marketing">Receive marketing emails</Label>
//                       </div>
//                     </CardContent>
//                     <CardFooter className="flex justify-between">
//                       <Button variant="outline">Cancel</Button>
//                       <Button>Submit</Button>
//                     </CardFooter>
//                   </Card>
//                 </section>
//               </TabsContent>

//               {/* Feedback Section */}
//               <TabsContent value="feedback" className="space-y-12">
//                 <section className="space-y-4">
//                   <h2 className="text-2xl font-bold">Alerts</h2>
//                   <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                     <Card>
//                       <CardHeader>
//                         <CardTitle>Alert Variants</CardTitle>
//                         <CardDescription>Different alert styles for various contexts</CardDescription>
//                       </CardHeader>
//                       <CardContent className="space-y-4">
//                         <Alert>
//                           <Info className="h-4 w-4" />
//                           <AlertTitle>Information</AlertTitle>
//                           <AlertDescription>This is an informational alert with neutral styling.</AlertDescription>
//                         </Alert>
//                         <Alert variant="destructive">
//                           <AlertCircle className="h-4 w-4" />
//                           <AlertTitle>Error</AlertTitle>
//                           <AlertDescription>This is an error alert with destructive styling.</AlertDescription>
//                         </Alert>
//                         <Alert className="bg-green-50 text-green-800 border-green-200 dark:bg-green-900/50 dark:text-green-300 dark:border-green-800">
//                           <CheckCircle2 className="h-4 w-4" />
//                           <AlertTitle>Success</AlertTitle>
//                           <AlertDescription>This is a success alert with custom styling.</AlertDescription>
//                         </Alert>
//                       </CardContent>
//                     </Card>

//                     <Card>
//                       <CardHeader>
//                         <CardTitle>Alert with Actions</CardTitle>
//                         <CardDescription>Alerts with interactive elements</CardDescription>
//                       </CardHeader>
//                       <CardContent className="space-y-4">
//                         <Alert>
//                           <Info className="h-4 w-4" />
//                           <AlertTitle>Browser Update Available</AlertTitle>
//                           <AlertDescription className="flex items-center justify-between">
//                             <span>A new version of your browser is available.</span>
//                             <Button size="sm" variant="outline">
//                               Update
//                             </Button>
//                           </AlertDescription>
//                         </Alert>
//                         <Alert className="bg-yellow-50 text-yellow-800 border-yellow-200 dark:bg-yellow-900/50 dark:text-yellow-300 dark:border-yellow-800">
//                           <AlertCircle className="h-4 w-4" />
//                           <AlertTitle>Warning</AlertTitle>
//                           <AlertDescription className="flex flex-col space-y-2">
//                             <span>Your subscription will expire in 3 days.</span>
//                             <div className="flex space-x-2">
//                               <Button size="sm" variant="outline">
//                                 Dismiss
//                               </Button>
//                               <Button size="sm">Renew Now</Button>
//                             </div>
//                           </AlertDescription>
//                         </Alert>
//                       </CardContent>
//                     </Card>
//                   </div>
//                 </section>

//                 <section className="space-y-4">
//                   <h2 className="text-2xl font-bold">Progress Indicators</h2>
//                   <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                     <Card>
//                       <CardHeader>
//                         <CardTitle>Progress Bar</CardTitle>
//                         <CardDescription>Visual indicators for progress</CardDescription>
//                       </CardHeader>
//                       <CardContent className="space-y-6">
//                         <div className="space-y-2">
//                           <div className="flex justify-between">
//                             <Label>Default Progress (45%)</Label>
//                             <span className="text-sm text-muted-foreground">45%</span>
//                           </div>
//                           <Progress value={45} />
//                         </div>
//                         <div className="space-y-2">
//                           <div className="flex justify-between">
//                             <Label>Download Progress (75%)</Label>
//                             <span className="text-sm text-muted-foreground">75%</span>
//                           </div>
//                           <Progress value={75} className="h-3" />
//                         </div>
//                         <div className="space-y-2">
//                           <div className="flex justify-between">
//                             <Label>Upload Progress (25%)</Label>
//                             <span className="text-sm text-muted-foreground">25%</span>
//                           </div>
//                           <Progress value={25} className="h-2" />
//                         </div>
//                       </CardContent>
//                     </Card>

//                     <Card>
//                       <CardHeader>
//                         <CardTitle>Step Progress</CardTitle>
//                         <CardDescription>Multi-step progress indicators</CardDescription>
//                       </CardHeader>
//                       <CardContent>
//                         <div className="relative flex items-center justify-between w-full">
//                           <div className="absolute h-0.5 bg-gray-200 w-full"></div>
//                           <div className="absolute h-0.5 bg-primary w-1/2"></div>

//                           <div className="relative z-10 flex items-center justify-center w-10 h-10 bg-primary text-white rounded-full">
//                             1
//                           </div>

//                           <div className="relative z-10 flex items-center justify-center w-10 h-10 bg-primary text-white rounded-full">
//                             2
//                           </div>

//                           <div className="relative z-10 flex items-center justify-center w-10 h-10 bg-gray-200 text-gray-600 rounded-full">
//                             3
//                           </div>
//                         </div>
//                         <div className="flex justify-between mt-2 px-1">
//                           <span className="text-sm">Details</span>
//                           <span className="text-sm">Payment</span>
//                           <span className="text-sm text-muted-foreground">Confirm</span>
//                         </div>
//                       </CardContent>
//                     </Card>
//                   </div>
//                 </section>

//                 <section className="space-y-4">
//                   <h2 className="text-2xl font-bold">Toasts & Notifications</h2>
//                   <Card>
//                     <CardHeader>
//                       <CardTitle>Toast Notifications</CardTitle>
//                       <CardDescription>Temporary notifications for user feedback</CardDescription>
//                     </CardHeader>
//                     <CardContent className="flex flex-wrap gap-4">
//                       <Button
//                         onClick={() => {
//                           toast({
//                             title: "Success",
//                             description: "Your action was completed successfully.",
//                           })
//                         }}
//                       >
//                         Show Success Toast
//                       </Button>
//                       <Button
//                         variant="outline"
//                         onClick={() => {
//                           toast({
//                             title: "Information",
//                             description: "Here's some information you should know.",
//                             variant: "default",
//                           })
//                         }}
//                       >
//                         Show Info Toast
//                       </Button>
//                       <Button
//                         variant="destructive"
//                         onClick={() => {
//                           toast({
//                             title: "Error",
//                             description: "There was a problem with your request.",
//                             variant: "destructive",
//                           })
//                         }}
//                       >
//                         Show Error Toast
//                       </Button>
//                       <Button
//                         variant="secondary"
//                         onClick={() => {
//                           toast({
//                             title: "With Action",
//                             description: "This toast has an action button.",
//                             action: (
//                               <Button size="sm" variant="outline">
//                                 Undo
//                               </Button>
//                             ),
//                           })
//                         }}
//                       >
//                         Toast with Action
//                       </Button>
//                     </CardContent>
//                   </Card>
//                 </section>

//                 <section className="space-y-4">
//                   <h2 className="text-2xl font-bold">Tooltips</h2>
//                   <Card>
//                     <CardHeader>
//                       <CardTitle>Tooltips</CardTitle>
//                       <CardDescription>Informational text that appears on hover</CardDescription>
//                     </CardHeader>
//                     <CardContent className="flex flex-wrap gap-4">
//                       <TooltipProvider>
//                         <Tooltip>
//                           <TooltipTrigger asChild>
//                             <Button variant="outline">Hover Me</Button>
//                           </TooltipTrigger>
//                           <TooltipContent>
//                             <p>This is a tooltip</p>
//                           </TooltipContent>
//                         </Tooltip>
//                       </TooltipProvider>

//                       <TooltipProvider>
//                         <Tooltip>
//                           <TooltipTrigger asChild>
//                             <Button variant="outline" size="icon">
//                               <Info className="h-4 w-4" />
//                             </Button>
//                           </TooltipTrigger>
//                           <TooltipContent>
//                             <p>Additional information</p>
//                           </TooltipContent>
//                         </Tooltip>
//                       </TooltipProvider>

//                       <TooltipProvider>
//                         <Tooltip>
//                           <TooltipTrigger asChild>
//                             <Button>Save</Button>
//                           </TooltipTrigger>
//                           <TooltipContent>
//                             <p>Save your changes</p>
//                           </TooltipContent>
//                         </Tooltip>
//                       </TooltipProvider>
//                     </CardContent>
//                   </Card>
//                 </section>
//               </TabsContent>

//               {/* Navigation Section */}
//               <TabsContent value="navigation" className="space-y-12">
//                 <section className="space-y-4">
//                   <h2 className="text-2xl font-bold">Navigation Menu</h2>
//                   <Card>
//                     <CardHeader>
//                       <CardTitle>Navigation Menu</CardTitle>
//                       <CardDescription>Dropdown navigation menus</CardDescription>
//                     </CardHeader>
//                     <CardContent>
//                       <NavigationMenu>
//                         <NavigationMenuList>
//                           <NavigationMenuItem>
//                             <NavigationMenuTrigger>Getting Started</NavigationMenuTrigger>
//                             <NavigationMenuContent>
//                               <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-2">
//                                 <li className="row-span-3">
//                                   <NavigationMenuLink asChild>
//                                     <a
//                                       className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-primary/50 to-primary p-6 no-underline outline-none focus:shadow-md"
//                                       href="/"
//                                     >
//                                       <div className="mt-4 mb-2 text-lg font-medium text-white flex items-center gap-2">
//                                         <img src="/images/bismillah-logo.png" alt="BismillahCSS Logo" className="h-6 w-auto" />
//                                         BismillahCSS
//                                       </div>
//                                       <p className="text-sm leading-tight text-white/90">
//                                         A utility-first CSS framework for rapid UI development
//                                       </p>
//                                     </a>
//                                   </NavigationMenuLink>
//                                 </li>
//                                 <li>
//                                   <NavigationMenuLink asChild>
//                                     <a
//                                       className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
//                                       href="/docs"
//                                     >
//                                       <div className="text-sm font-medium leading-none">Documentation</div>
//                                       <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
//                                         Learn how to use BismillahCSS components
//                                       </p>
//                                     </a>
//                                   </NavigationMenuLink>
//                                 </li>
//                                 <li>
//                                   <NavigationMenuLink asChild>
//                                     <a
//                                       className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
//                                       href="/docs/installation"
//                                     >
//                                       <div className="text-sm font-medium leading-none">Installation</div>
//                                       <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
//                                         How to install and set up BismillahCSS
//                                       </p>
//                                     </a>
//                                   </NavigationMenuLink>
//                                 </li>
//                                 <li>
//                                   <NavigationMenuLink asChild>
//                                     <a
//                                       className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
//                                       href="/components"
//                                     >
//                                       <div className="text-sm font-medium leading-none">Components</div>
//                                       <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
//                                         Explore all available components
//                                       </p>
//                                     </a>
//                                   </NavigationMenuLink>
//                                 </li>
//                               </ul>
//                             </NavigationMenuContent>
//                           </NavigationMenuItem>
//                           <NavigationMenuItem>
//                             <NavigationMenuTrigger>Components</NavigationMenuTrigger>
//                             <NavigationMenuContent>
//                               <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
//                                 {["Buttons", "Cards", "Forms", "Layout", "Navigation"].map((component) => (
//                                   <li key={component}>
//                                     <NavigationMenuLink asChild>
//                                       <a
//                                         className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
//                                         href={`/components/${component.toLowerCase()}`}
//                                       >
//                                         <div className="text-sm font-medium leading-none">{component}</div>
//                                         <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
//                                           {component} components and examples
//                                         </p>
//                                       </a>
//                                     </NavigationMenuLink>
//                                   </li>
//                                 ))}
//                               </ul>
//                             </NavigationMenuContent>
//                           </NavigationMenuItem>
//                           <NavigationMenuItem>
//                             <Link href="/about" legacyBehavior passHref>
//                               <NavigationMenuLink className="font-medium">About</NavigationMenuLink>
//                             </Link>
//                           </NavigationMenuItem>
//                         </NavigationMenuList>
//                       </NavigationMenu>
//                     </CardContent>
//                   </Card>
//                 </section>

//                 <section className="space-y-4">
//                   <h2 className="text-2xl font-bold">Breadcrumbs</h2>
//                   <Card>
//                     <CardHeader>
//                       <CardTitle>Breadcrumbs</CardTitle>
//                       <CardDescription>Navigation path indicators</CardDescription>
//                     </CardHeader>
//                     <CardContent className="space-y-4">
//                       <Breadcrumb>
//                         <BreadcrumbList>
//                           <BreadcrumbItem>
//                             <BreadcrumbLink href="/">Home</BreadcrumbLink>
//                           </BreadcrumbItem>
//                           <BreadcrumbSeparator />
//                           <BreadcrumbItem>
//                             <BreadcrumbLink href="/components">Components</BreadcrumbLink>
//                           </BreadcrumbItem>
//                           <BreadcrumbSeparator />
//                           <BreadcrumbItem>
//                             \

